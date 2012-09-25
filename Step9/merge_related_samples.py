#!/usr/bin/env python2.7

import os
import sys
import gzip
import argparse

def main(argString=None):
    # Getting and checking the options
    args = parseArgs(argString)
    checkArgs(args)

    merge_related_samples(args.ibs_related, args.out, args.no_status)


def merge_related_samples(file_name, out_prefix, no_status):
    """Merge related samples."""
    # What we need to save
    status = {}
    samples_sets = []
    open_function = open
    if file_name.endswith(".gz"):
        open_function = gzip.open
    with open_function(file_name, 'rb') as input_file:
        header_index = dict([(col_name, i) for i, col_name in
                                enumerate(input_file.readline().rstrip("\r\n").split("\t"))])
        for col_name in {"FID1", "IID1", "FID2", "IID2"}:
            if col_name not in header_index:
                msg = "{}: no column named {}".format(file_name, col_name)
                raise ProgramError(msg)
        if not no_status:
            if "status" not in header_index:
                msg = "{}: no column named status".format(file_name)
                raise ProgramError(msg)

        for line in input_file:
            row = line.rstrip("\r\n").split("\t")
            sample_1 = (row[header_index["FID1"]], row[header_index["IID1"]])
            sample_2 = (row[header_index["FID2"]], row[header_index["IID2"]])
            tmp_set = {sample_1, sample_2}
            match = False
            for i in xrange(len(samples_sets)):
                if len(tmp_set & samples_sets[i]) > 0:
                    # We have a match
                    samples_sets[i] |= tmp_set
                    match=True
            if not match:
                # We did not find a match, so we add
                samples_sets.append(tmp_set)

            # Check for the status
            the_status = "None"
            if not no_status:
                the_status = row[header_index["status"]]
            status[(sample_1, sample_2)] = the_status

    # Doing a final check
    final_samples_set = []
    removed = set()
    for i in xrange(len(samples_sets)):
        if i in removed:
            # We removed this group
            continue
        group = samples_sets[i]
        j = i + 1
        while j < len(samples_sets):
            if j in removed:
                j += 1
                continue
            if len(group & samples_sets[j]) > 0:
                # We have a match, we start from the beginning
                group |= samples_sets[j]
                removed.add(j)
                j = i + 1
                continue
            j += 1

        final_samples_set.append(group)

    # Printing the output file
    output_file = None
    try:
        output_file = open(out_prefix + ".merged_related_individuals", 'w')
        to_print = ["index", "FID1", "IID1", "FID2", "IID2"]
        if not no_status:
            to_print.append("status")
        print >>output_file, "\t".join(to_print)
    except IOError:
        msg = "{}: can't write file".format(out_prefix + ".merged_related_individuals")
        raise ProgramError(msg)

    # Iterating on the groups
    for i, group in enumerate(final_samples_set):
        index = str(i+1)
        for sample_1, sample_2 in status.iterkeys():
            if (sample_1 in group) and (sample_2 in group):
                to_print = [index, sample_1[0], sample_1[1], sample_2[0],
                            sample_2[1]]
                if not no_status:
                    to_print.append(status[(sample_1, sample_2)])
                print >>output_file, "\t".join(to_print)

    # Closing the output file
    output_file.close()


def checkArgs(args):
    """Checks the arguments and options.

    :param args: a :py:class:`Namespace` object containing the options of the
                 program.
    :type args: :py:class:`argparse.Namespace`

    :returns: ``True`` if everything was OK.

    If there is a problem with an option, an exception is raised using the
    :py:class:`ProgramError` class, a message is printed
    to the :class:`sys.stderr` and the program exists with code 1.

    """
    if not os.path.isfile(args.ibs_related):
        msg = "{}: no such file".format(args.ibs_related)
        raise ProgramError(msg)

    return True


def parseArgs(argString=None): # pragma: no cover
    """Parses the command line options and arguments.

    :returns: A :py:class:`numpy.Namespace` object created by
              the :py:mod:`argparse` module. It contains the values of the
              different options.

    ===============  ======  ===================================================
        Options       Type                     Description
    ===============  ======  ===================================================
    ===============  ======  ===================================================

    .. note::
        No option check is done here (except for the one automatically done by
        argparse). Those need to be done elsewhere (see :py:func:`checkArgs`).

    """
    args = None
    if argString is None:
        args = parser.parse_args()
    else:
        args = parser.parse_args(argString)

    return args


class ProgramError(Exception):
    """An :py:class:`Exception` raised in case of a problem.
    
    :param msg: the message to print to the user before exiting.
    :type msg: string

    """
    def __init__(self, msg):
        """Construction of the :py:class:`ProgramError` class.

        :param msg: the message to print to the user
        :type msg: string

        """
        self.message = str(msg)

    def __str__(self):
        return self.message


# The parser object
prog = "merge_related_samples"
desc = """Merges related samples according to IBS."""
parser = argparse.ArgumentParser(description=desc, prog=prog)

# The INPUT files
group = parser.add_argument_group("Input File")
group.add_argument("--ibs-related", type=str, metavar="FILE", required=True,
                   help=("The input file containing related individuals "
                         "according to IBS value."))
# The options
group = parser.add_argument_group("Options")
group.add_argument("--no-status", action="store_true",
                   help="The input file doesn't have a 'status' column.")
# The OUTPUT files
group = parser.add_argument_group("Output File")
group.add_argument("--out", type=str, metavar="FILE", default="ibs_merged",
                   help=("The prefix of the output files. [default: "
                         "%(default)s]"))

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print >>sys.stderr, "Cancelled by user"
        sys.exit(0)
    except ProgramError as e:
        parser.error(e.message)
