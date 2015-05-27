#!/usr/bin/env python2.7

# This file is part of pyGenClean.
#
# pyGenClean is free software: you can redistribute it and/or modify it under
# the terms of the GNU General Public License as published by the Free Software
# Foundation, either version 3 of the License, or (at your option) any later
# version.
#
# pyGenClean is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along with
# pyGenClean.  If not, see <http://www.gnu.org/licenses/>.


import os
import re
import textwrap
from string import Template

import jinja2


_char_mod = {
    "~": r"$\sim$",
}
_escaped_char = ["$", "%", "_", "}", "{", "&", "#"]


# The document template
jinja2_env = jinja2.Environment(
        block_start_string='\BLOCK{',
        block_end_string='}',
        variable_start_string='\VAR{',
        variable_end_string='}',
        comment_start_string='\#{',
        comment_end_string='}',
        line_statement_prefix='%-',
        line_comment_prefix='%#',
        trim_blocks=True,
        autoescape=False,
        loader=jinja2.PackageLoader(__name__, "templates"),
)


def section(name):
    """Creates a new section in LaTeX.

    :param name: the name of the new section.
    :type name: string

    :returns: a LaTeX string containing a new section.

    """
    return r"\section{" + name + "}"


def subsection(name):
    """Creates a new section in LaTeX.

    :param name: the name of the new section.
    :type name: string

    :returns: a LaTeX string containing a new section.

    """
    return r"\subsection{" + name + "}"


def item(text):
    """Returns an LaTeX item (for enumerate or itemize).

    :param text: the text.
    :type text: string

    :returns: a LaTeX item.

    """
    return r"\item " + text


def texttt(text):
    """Returns type writer font.

    :param text: the text.
    :type text: string.

    :returns: a type writer font.

    """
    return r"\texttt{" + text + "}"


def textit(text):
    """Returns italic font.

    :param text: the text.
    :type text: string.

    :returns: an italic font.

    """
    return r"\textit{" + text + "}"


def bib_entry(**kwargs):
    """Creates a bibliography entry.

    :param name: the name of the entry.
    :param authors: the authors.
    :param title: the title.
    :param journal: the journal.
    :param year: the year.
    :param volume: the volume.
    :param number: the number.
    :param pages: the pages.

    :type name: string
    :type authors: string
    :type title: string
    :type journal: string
    :type year: string
    :type volume: string
    :type number: string
    :type pages: string

    :returns: a bib entry.

    """
    bib_entry = Template(r"""\bibitem{${name}}
    ${authors}:
    \textbf{${title}.}
    \emph{${journal}} ${year},
    \textbf{${volume}}(${number}): ${pages}""")

    return bib_entry.substitute(kwargs)


def wrap_lines(content, length=80):
    """Wraps long lines to a maximum length of 80.

    :param content: the content to wrap.
    :param legnth: the maximum length to wrap the content.

    :type content: string
    :type length: int

    :returns: a string containing the wrapped content.

    """
    return "\n".join(textwrap.wrap(content, length, break_long_words=False))


def format_numbers(number):
    """Formats number in the scientific notation for LaTeX.

    :param number: the number to format.
    :type number: string

    :returns: a string containing the scientific notation of the number.

    """
    # Matching
    r = re.match(r"^([-+]?\d*\.\d+|\d+)e([-+]?\d+)$", number)

    # Nothing matched
    if not r:
        return number

    # Getting the coefficient and the exponent
    coefficient = r.group(1)
    exponent = int(r.group(2))

    return "$" + coefficient + r"\times 10^{" + str(exponent) + "}$"


def sanitize_fig_name(name):
    """Sanitizes the name of a file (for including graphics in LaTeX).

    :param name: the name of the file to sanitize.
    :type name: string

    :returns: the sanitized name.

    For example, if the name of the graphic file is ``test.1.png``, the
    sanitized version of it for LaTeX is ``{test.1}.png``.

    """
    name, extension = os.path.splitext(name)
    return "{" + name + "}" + extension


def sanitize_tex(original_text):
    """Sanitize TeX text.

    :param original_text: the text to sanitize for LaTeX.

    :type original_text: string

    :returns: the sanitize text.

    Text is sanitized by following these steps:

    1. Replaces ``\\\\`` by ``\\textbackslash``
    2. Escapes certain characters (such as ``$``, ``%``, ``_``, ``}``, ``{``,
       ``&`` and ``#``) by adding a backslash (*e.g.* from ``&`` to ``\\&``).
    3. Replaces special characters such as ``~`` by the LaTeX equivalent
       (*e.g.* from ``~`` to ``$\\sim$``).

    """
    # The backslashes
    sanitized_tex = original_text.replace("\\", r"\textbackslash ")

    # Escaping
    sanitized_tex = re.sub(r"([{}])".format("".join(_escaped_char)),
                           r"\\\g<1>", sanitized_tex)

    # Replacing
    for character, mod in _char_mod.items():
        sanitized_tex = sanitized_tex.replace(character, mod)

    return sanitized_tex
