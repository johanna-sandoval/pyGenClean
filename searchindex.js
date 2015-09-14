Search.setIndex({envversion:46,filenames:["check_ethnicity","clean_noCall_hetero_snps","compare_gold_standard","configuration_files","data_clean_up_module","duplicated_markers","duplicated_samples","find_related_samples","flag_hw","flag_maf_zero","how_to_run","index","install_linux","install_windows","list_of_options","marker_missingness","plate_bias","plink_utils","protocol","remove_heterozygous_haploid","result_table","sample_missingness","sex_check"],objects:{"pyGenClean.DupSNPs":{duplicated_snps:[5,0,0,"-"]},"pyGenClean.DupSNPs.duplicated_snps":{ProgramError:[5,1,1,""],checkArgs:[5,2,1,""],chooseBestSnps:[5,2,1,""],computeFrequency:[5,2,1,""],computeStatistics:[5,2,1,""],createAndCleanTPED:[5,2,1,""],createFinalTPEDandTFAM:[5,2,1,""],findUniques:[5,2,1,""],flipGenotype:[5,2,1,""],getIndexOfHeteroMen:[5,2,1,""],main:[5,2,1,""],parseArgs:[5,2,1,""],printConcordance:[5,2,1,""],printDuplicatedTPEDandTFAM:[5,2,1,""],printProblems:[5,2,1,""],processTPED:[5,2,1,""],readMAP:[5,2,1,""],readTFAM:[5,2,1,""],runCommand:[5,2,1,""],safe_main:[5,2,1,""]},"pyGenClean.DupSamples":{duplicated_samples:[6,0,0,"-"]},"pyGenClean.DupSamples.duplicated_samples":{ProgramError:[6,1,1,""],addToTPEDandTFAM:[6,2,1,""],checkArgs:[6,2,1,""],chooseBestDuplicates:[6,2,1,""],computeStatistics:[6,2,1,""],createAndCleanTPED:[6,2,1,""],findDuplicates:[6,2,1,""],main:[6,2,1,""],parseArgs:[6,2,1,""],printConcordance:[6,2,1,""],printDuplicatedTPEDandTFAM:[6,2,1,""],printStatistics:[6,2,1,""],printUniqueTFAM:[6,2,1,""],processTPED:[6,2,1,""],readTFAM:[6,2,1,""],safe_main:[6,2,1,""]},"pyGenClean.Ethnicity":{check_ethnicity:[0,0,0,"-"],find_outliers:[0,0,0,"-"]},"pyGenClean.Ethnicity.check_ethnicity":{ProgramError:[0,1,1,""],allFileExists:[0,2,1,""],checkArgs:[0,2,1,""],combinePlinkBinaryFiles:[0,2,1,""],computeFrequency:[0,2,1,""],compute_eigenvalues:[0,2,1,""],createMDSFile:[0,2,1,""],createPopulationFile:[0,2,1,""],create_scree_plot:[0,2,1,""],excludeSNPs:[0,2,1,""],extractSNPs:[0,2,1,""],findFlippedSNPs:[0,2,1,""],findOverlappingSNPsWithReference:[0,2,1,""],find_the_outliers:[0,2,1,""],flipSNPs:[0,2,1,""],main:[0,2,1,""],parseArgs:[0,2,1,""],plotMDS:[0,2,1,""],renameSNPs:[0,2,1,""],runCommand:[0,2,1,""],runRelatedness:[0,2,1,""],safe_main:[0,2,1,""]},"pyGenClean.Ethnicity.find_outliers":{ProgramError:[0,1,1,""],add_custom_options:[0,2,1,""],checkArgs:[0,2,1,""],find_outliers:[0,2,1,""],find_ref_centers:[0,2,1,""],main:[0,2,1,""],parseArgs:[0,2,1,""],read_mds_file:[0,2,1,""],read_population_file:[0,2,1,""],safe_main:[0,2,1,""]},"pyGenClean.FlagHW":{flag_hw:[8,0,0,"-"]},"pyGenClean.FlagHW.flag_hw":{ProgramError:[8,1,1,""],checkArgs:[8,2,1,""],compareBIMfiles:[8,2,1,""],computeHWE:[8,2,1,""],computeNumberOfMarkers:[8,2,1,""],main:[8,2,1,""],parseArgs:[8,2,1,""],runCommand:[8,2,1,""],safe_main:[8,2,1,""]},"pyGenClean.FlagMAF":{flag_maf_zero:[9,0,0,"-"]},"pyGenClean.FlagMAF.flag_maf_zero":{ProgramError:[9,1,1,""],checkArgs:[9,2,1,""],computeFrequency:[9,2,1,""],findSnpWithMaf0:[9,2,1,""],main:[9,2,1,""],parseArgs:[9,2,1,""],safe_main:[9,2,1,""]},"pyGenClean.HeteroHap":{remove_heterozygous_haploid:[19,0,0,"-"]},"pyGenClean.HeteroHap.remove_heterozygous_haploid":{ProgramError:[19,1,1,""],checkArgs:[19,2,1,""],main:[19,2,1,""],parseArgs:[19,2,1,""],runPlink:[19,2,1,""],safe_main:[19,2,1,""]},"pyGenClean.MarkerMissingness":{snp_missingness:[15,0,0,"-"]},"pyGenClean.MarkerMissingness.snp_missingness":{ProgramError:[15,1,1,""],checkArgs:[15,2,1,""],compareBIM:[15,2,1,""],main:[15,2,1,""],parseArgs:[15,2,1,""],runPlink:[15,2,1,""],safe_main:[15,2,1,""]},"pyGenClean.Misc":{compare_gold_standard:[2,0,0,"-"]},"pyGenClean.Misc.compare_gold_standard":{ProgramError:[2,1,1,""],checkArgs:[2,2,1,""],check_fam_for_samples:[2,2,1,""],computeFrequency:[2,2,1,""],compute_statistics:[2,2,1,""],exclude_SNPs_samples:[2,2,1,""],extractSNPs:[2,2,1,""],findFlippedSNPs:[2,2,1,""],findOverlappingSNPsWithGoldStandard:[2,2,1,""],flipSNPs:[2,2,1,""],illumina_to_snp:[2,2,1,""],keepSamples:[2,2,1,""],parseArgs:[2,2,1,""],read_same_samples_file:[2,2,1,""],read_source_alleles:[2,2,1,""],read_source_manifest:[2,2,1,""],renameSNPs:[2,2,1,""],runCommand:[2,2,1,""],safe_main:[2,2,1,""]},"pyGenClean.NoCallHetero":{clean_noCall_hetero_snps:[1,0,0,"-"],heterozygosity_plot:[1,0,0,"-"]},"pyGenClean.NoCallHetero.clean_noCall_hetero_snps":{ProgramError:[1,1,1,""],checkArgs:[1,2,1,""],main:[1,2,1,""],parseArgs:[1,2,1,""],processTPEDandTFAM:[1,2,1,""],safe_main:[1,2,1,""]},"pyGenClean.NoCallHetero.heterozygosity_plot":{ProgramError:[1,1,1,""],checkArgs:[1,2,1,""],compute_heterozygosity:[1,2,1,""],compute_nb_samples:[1,2,1,""],is_heterozygous:[1,2,1,""],main:[1,2,1,""],parseArgs:[1,2,1,""],plot_heterozygosity:[1,2,1,""],safe_main:[1,2,1,""],save_heterozygosity:[1,2,1,""]},"pyGenClean.PlateBias":{plate_bias:[16,0,0,"-"]},"pyGenClean.PlateBias.plate_bias":{ProgramError:[16,1,1,""],checkArgs:[16,2,1,""],computeFrequencyOfSignificantSNPs:[16,2,1,""],executePlateBiasAnalysis:[16,2,1,""],extractSignificantSNPs:[16,2,1,""],main:[16,2,1,""],parseArgs:[16,2,1,""],runCommand:[16,2,1,""],safe_main:[16,2,1,""]},"pyGenClean.PlinkUtils":{compare_bim:[17,0,0,"-"],createRowFromPlinkSpacedOutput:[17,2,1,""],get_version:[17,2,1,""],plot_MDS_standalone:[0,0,0,"-"],subset_data:[17,0,0,"-"]},"pyGenClean.PlinkUtils.compare_bim":{ProgramError:[17,1,1,""],checkArgs:[17,2,1,""],compareSNPs:[17,2,1,""],main:[17,2,1,""],parseArgs:[17,2,1,""],readBIM:[17,2,1,""],safe_main:[17,2,1,""]},"pyGenClean.PlinkUtils.plot_MDS_standalone":{ProgramError:[0,1,1,""],checkArgs:[0,2,1,""],extractData:[0,2,1,""],main:[0,2,1,""],parseArgs:[0,2,1,""],plotMDS:[0,2,1,""],readPopulations:[0,2,1,""],safe_main:[0,2,1,""]},"pyGenClean.PlinkUtils.subset_data":{ProgramError:[17,1,1,""],checkArgs:[17,2,1,""],main:[17,2,1,""],parseArgs:[17,2,1,""],runCommand:[17,2,1,""],safe_main:[17,2,1,""],subset_data:[17,2,1,""]},"pyGenClean.RelatedSamples":{find_related_samples:[7,0,0,"-"],merge_related_samples:[7,0,0,"-"]},"pyGenClean.RelatedSamples.find_related_samples":{ProgramError:[7,1,1,""],checkArgs:[7,2,1,""],checkNumberOfSNP:[7,2,1,""],extractRelatedIndividuals:[7,2,1,""],extractSNPs:[7,2,1,""],main:[7,2,1,""],mergeGenomeLogFiles:[7,2,1,""],parseArgs:[7,2,1,""],plot_related_data:[7,2,1,""],runCommand:[7,2,1,""],runGenome:[7,2,1,""],runGenomeSGE:[7,2,1,""],safe_main:[7,2,1,""],selectSNPsAccordingToLD:[7,2,1,""],splitFile:[7,2,1,""]},"pyGenClean.RelatedSamples.merge_related_samples":{ProgramError:[7,1,1,""],checkArgs:[7,2,1,""],main:[7,2,1,""],merge_related_samples:[7,2,1,""],parseArgs:[7,2,1,""],safe_main:[7,2,1,""]},"pyGenClean.SampleMissingness":{sample_missingness:[21,0,0,"-"]},"pyGenClean.SampleMissingness.sample_missingness":{ProgramError:[21,1,1,""],checkArgs:[21,2,1,""],main:[21,2,1,""],parseArgs:[21,2,1,""],runPlink:[21,2,1,""],safe_main:[21,2,1,""]},"pyGenClean.SexCheck":{baf_lrr_plot:[22,0,0,"-"],gender_plot:[22,0,0,"-"],sex_check:[22,0,0,"-"]},"pyGenClean.SexCheck.baf_lrr_plot":{ProgramError:[22,1,1,""],checkArgs:[22,2,1,""],check_file_names:[22,2,1,""],encode_chromosome:[22,2,1,""],main:[22,2,1,""],parseArgs:[22,2,1,""],plot_baf_lrr:[22,2,1,""],read_problematic_samples:[22,2,1,""],safe_main:[22,2,1,""]},"pyGenClean.SexCheck.gender_plot":{ProgramError:[22,1,1,""],checkArgs:[22,2,1,""],encode_chr:[22,2,1,""],encode_gender:[22,2,1,""],main:[22,2,1,""],parseArgs:[22,2,1,""],plot_gender:[22,2,1,""],print_data_to_file:[22,2,1,""],read_bim:[22,2,1,""],read_fam:[22,2,1,""],read_intensities:[22,2,1,""],read_sex_problems:[22,2,1,""],read_summarized_intensities:[22,2,1,""],safe_main:[22,2,1,""]},"pyGenClean.SexCheck.sex_check":{ProgramError:[22,1,1,""],checkArgs:[22,2,1,""],checkBim:[22,2,1,""],computeHeteroPercentage:[22,2,1,""],computeNoCall:[22,2,1,""],createGenderPlot:[22,2,1,""],createLrrBafPlot:[22,2,1,""],createPedChr23UsingPlink:[22,2,1,""],createPedChr24UsingPlink:[22,2,1,""],main:[22,2,1,""],parseArgs:[22,2,1,""],readCheckSexFile:[22,2,1,""],runCommand:[22,2,1,""],runPlinkSexCheck:[22,2,1,""],safe_main:[22,2,1,""]},"pyGenClean.run_data_clean_up":{all_files_exist:[4,2,1,""],check_args:[4,2,1,""],check_input_files:[4,2,1,""],count_markers_samples:[4,2,1,""],main:[4,2,1,""],parse_args:[4,2,1,""],read_config_file:[4,2,1,""],run_check_ethnicity:[4,2,1,""],run_command:[4,2,1,""],run_compare_gold_standard:[4,2,1,""],run_duplicated_samples:[4,2,1,""],run_duplicated_snps:[4,2,1,""],run_find_related_samples:[4,2,1,""],run_flag_hw:[4,2,1,""],run_flag_maf_zero:[4,2,1,""],run_noCall_hetero_snps:[4,2,1,""],run_plate_bias:[4,2,1,""],run_remove_heterozygous_haploid:[4,2,1,""],run_sample_missingness:[4,2,1,""],run_sex_check:[4,2,1,""],run_snp_missingness:[4,2,1,""],run_subset_data:[4,2,1,""],safe_main:[4,2,1,""]},pyGenClean:{PlinkUtils:[17,0,0,"-"],run_data_clean_up:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","exception","Python exception"],"2":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:function"},terms:{"0099cc":7,"1000g_eur":[12,13],"10_check_ethn":10,"13_flag_maf_zero":10,"14_flag_hw":10,"14_remove_heterozygous_haploid":10,"1_check_ethn":[12,13],"2_sex_check":[12,13],"377eb8":0,"4daf4a":0,"6_sample_missing":10,"7_sex_check":10,"7_virtualenv":[12,13],"8_plate_bia":10,"984ea3":0,"9933cc":7,"9_find_related_sampl":10,"boolean":[0,2,7],"case":[0,1,2,5,6,7,8,9,15,16,17,19,21,22],"catch":[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],"char":22,"class":[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],"default":[0,1,3,5,6,7,8,9,11,12,14,15,16,17,19,21,22],"final":[0,3,5,6,7,11,12,13,18,22],"float":[0,1,5,6,7,8,14,15,16,21,22],"function":[0,1,2,3,4,5,6,7,8,9,11,14,15,16,17,18,19,21,22],"import":4,"int":[0,1,7,14,22],"long":22,"new":[0,1,4,5,6,12,13,17,21],"return":[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],"true":[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],"try":[0,5],"while":[5,10,18,22],abl:[12,13],abnorm:22,about:[0,1,5,6,7,8,9],abov:[0,1,5,6,7,8,9,15,16,19,21,22],acceler:11,accord:[0,3,4,5,6,7,10,15],accordingli:6,accumul:7,across:22,activ:10,actual:[0,1,5,6,7,8,9,15,16,17,19,21,22],add:[0,6,17],add_custom_opt:0,addit:22,addtotpedandtfam:6,adjust:0,after:[0,2,3,5,7,8,10,15,16,17,18,20,22],afterfilenam:8,again:[0,6,10,14,22],aggreg:7,all:[0,1,3,4,5,6,7,8,9,11,12,13,16,17,18,20,22],all_files_exist:4,all_markers_from_previous_steps_to_exclud:3,all_samples_from_previous_steps_to_remov:3,allel:[0,1,2,5],allelea:2,alleleb:2,allfail:[1,18],allfileexist:0,allhetero:[1,18],allow:14,allproblemsfilenam:22,alon:22,along:[5,6,12,13,14],alpha:0,alreadi:12,also:[0,5,11,18,22],amount:[11,17],analysi:[0,3,5,7,10,11,12,13,15,16,18,20,22],ani:[3,5,10,11,14,18],anoth:[0,6,7,17,18],anyth:10,appear:[18,22],append:[0,1,2,5,6,7,8,9,11,14,15,16,19,22],appropri:18,approxim:18,archiv:[12,13],area:18,arg:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],argpars:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],argstr:[0,1,2,5,6,7,8,9,15,16,17,19,21,22],argument:[0,1,2,4,5,6,7,8,9,11,15,16,17,19,21,22],argumentpars:0,around:[18,22],arrai:[0,1,5,6,7,11,14,17],ask:7,asker:7,assign:18,assoc:[3,14,16,18],associ:[0,11,18],assum:5,author:[4,11],autom:1,automat:[0,1,2,4,5,6,7,8,9,14,15,16,17,19,21,22],autosom:18,avail:[0,1,3,4,5,11,12,13,14,17,18,20,22],axi:[0,1,7,14,22],background:[4,11],bad:6,baf:[3,14,18,22],baf_lrr_fil:3,base:18,base_dir:4,basic:11,batch:11,beauti:17,becaus:[0,5,18,20],becom:[0,5,10],bed:[0,2,7,8,9,11,13,14,15,16,18,19,21,22],bedfil:3,been:[0,1,3,13,18],befor:[0,1,2,3,5,6,7,8,9,10,12,13,14,15,16,17,18,19,21,22],beforefilenam:8,below:[0,1,5,6,7,8,9,11,15,16,18,19,20,21,22],best:[0,5,6,12,14],between:[0,5,6,7,8,14,17,18,22],bfile:[0,2,3,4,7,8,9,10,11,12,13,14,15,16,17,19,21,22],bia:[3,4,11],bigger:0,biggest:4,bim:[0,2,7,8,9,11,13,14,15,16],bin:[1,12],binari:[0,2,3,4,7,8,9,11,14,15,16,17,19,21,22],bit:[11,12,13,17],blue:[0,22],bonferroni:[3,8,18,20],bool:[0,1,7,17,21,22],bot:2,both:[2,6,11,13,14,22],bottom:0,box:[1,11],boxplot:1,bracket:4,build:[12,13],bz2:[12,13],calcul:18,can:[1,3,5,7,8,10,12,14,17,18,22],cannot:0,care:18,cat:[10,18],caucasian:20,cc0000:7,center:0,center_info:0,certain:[4,5,6,7,12,17],ceu:[0,3,12,13,14],ceu_popul:3,chang:[0,3,17,22],chb:[0,3,12,13,14],chb_popul:3,check:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],check_arg:4,check_ethnicity_hapmap_ref_pops_b37:[12,13],check_ethnicity_hapmap_reference_populations_b37:12,check_fam_for_sampl:2,check_file_nam:22,check_input_fil:4,checkarg:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],checkbim:22,checknumberofsnp:7,child:[7,18],chip:[2,14],choos:[5,6,14],choosebestdupl:[5,6],choosebestsnp:5,choosen_related_individu:18,chosen:[5,6,7,18],chosen_related_individu:7,chosen_sampl:6,chosen_snp:5,chosensampl:6,chosensnp:5,chr23:22,chr23_recodea:[18,22],chr24:22,chr24_recodea:[18,22],chr:[2,3,14,17,22],chrn:22,chromosom:[1,3,5,6,14,18,20,22],classif:0,clean:0,clean_geno:[15,18,21],clean_mind:[10,18,21],clean_nocall_hetero:[1,18],cleanup:11,close:12,cluster:[0,7,14,18,22],coancestri:18,code:[0,1],collect:6,color:[0,7,22],column:[0,2,5,6,7,11,14,16,17,18,20,22],combin:0,combineplinkbinaryfil:0,come:[7,18],command:[0,1,2,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,21,22],comment:[3,10,11],common:5,companion:17,compar:[0,1,4,5,6,8,12,13,15],compare_bim:15,compare_gold_standard:[2,4],comparebim:15,comparebimfil:8,comparesnp:17,comparison:0,complet:[3,5,6,10,11,14,18,20],completiont:[5,6],compliant:3,compon:[0,3,12,13,14,18],compos:0,composit:[5,6,14],comput:[0,1,2,3,4,5,6,7,8,9,14,15,16,21,22],compute_eigenvalu:0,compute_heterozygos:1,compute_nb_sampl:1,compute_statist:2,computefrequ:[0,2,5,9],computefrequencyofsignificantsnp:16,computeheteropercentag:22,computehw:8,computenocal:22,computenumberofmark:8,computestatist:[5,6],concord:[3,5,6,14,18,20],concordance_al:6,concordancet:[5,6],conduct:11,conf:[4,10,11,12,13],conf_1:10,conf_2:10,confirm:18,conjuct:11,consanguin:18,consid:[0,5,6,7,14],consist:[0,11],constant:0,construct:5,consult:18,contain:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,21,22],content:[12,13,22],contigu:11,continu:[4,6],control:[11,20],copi:[1,5,6,22],correct:[3,20,22],correctli:[10,18],correspond:[0,18,20],could:[3,18,22],count:[4,8],count_markers_sampl:4,coupl:0,cousin:18,creat:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],create_scree_plot:0,createandcleantp:[5,6],createfinaltpedandtfam:5,creategenderplot:22,createlrrbafplot:22,createmdsfil:0,createpedchr23usingplink:22,createpedchr24usingplink:22,createpopulationfil:0,createrowfromplinkspacedoutput:17,creation:[5,14],cross:0,current:[4,5,6,11,12,13],custom:[0,1,11,14,15,22],customiz:11,cut:18,cycl:5,data1:2,data:[0,1,2,3],data_clean_up:[4,10,12,13],data_tim:[12,13],dataset:[1,3,4,5,6,8,9,10,15],dataset_prefix:10,date:[4,12,13],date_tim:[12,13],dd_hh:10,deactiv:12,decis:11,defaultdict:6,defin:[3,15,21],degre:[7,18],delet:7,delimit:[17,22],denomin:5,depend:[7,11],describ:[0,1,2,3,5,6,7,8,9,10,11,15,16,19,21,22],descript:[0,1,2,4,5,6,7,8,9,11,14,15,16,17,19,20,21,22],desir:0,desktop:13,detail:[5,18,20],detect:[0,12,13,14,18,20],determin:[0,17,18],deviat:[0,14],dict:[0,5,6,22],did:18,diff:[6,18],diff_frequ:[5,18],diff_minor_allel:5,differ:[0,1,2,4,5,6,7,8,9,11,14,15,16,17,18,19,21,22],difffreq:5,dir:[3,14,22],directli:3,directori:[3,4,10,12,13,14,22],discard:7,discarded_related_individu:[7,10,18],discord:18,disequilibrium:8,distanc:0,distribut:[1,3,12,18],divid:[5,6,22],doesn:[4,6,7],don:6,done:[0,1,2,4,5,6,7,8,9,10,14,15,16,17,19,21,22],dot:22,doubl:18,download:[3,11,12,13],downstream:11,draw:1,drmaa:3,drop:22,dummi:15,dup_sampl:[6,18],dup_snp:[5,18],dupindex:6,dupindex_1:6,dupindex_2:6,duplic:[0,3,4],duplicated_marker_nam:[5,18],duplicated_sampl:[3,4,5],duplicated_snp:[3,4],duplicatedsampl:6,dupsampl:[4,5],dupsnp:4,dure:[6,20],e41a1c:0,each:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,21,22],easi:[11,17],easiest:13,edu:11,effect:[14,16],effici:[3,17],eigensoft:0,eigenvalu:0,either:[0,1,2,4,5,7,12,17,21],element:[0,4,5,6,22],els:22,elsewher:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],empti:22,enabl:0,encod:[6,22],encode_chr:22,encode_chromosom:22,encode_gend:22,enough:[0,5,6,7,14,22],ensur:0,entir:6,environ:10,equal:[0,6,18],error:[0,4,11,18],etc:18,evalu:18,even:[0,14],everi:[5,6,14,22],everybodi:5,everyth:[0,1,2,3,4,5,6,7,8,9,10,15,16,17,19,21,22],exact:[0,11],exactli:[5,12,13,18],examin:18,exampl:[0,3,4,5,10,11,12,17],except:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],exclud:[0,2,3,4,5,6,8,10,14,17],exclude_snps_sampl:2,excluded_sampl:6,excludesnp:0,exclusionfilenam:0,exclusionsnp:2,execut:16,executeplatebiasanalysi:16,exist:[0,1,2,4,5,6,7,8,9,12,15,16,17,19,21,22],exit:[0,1,2,4,5,6,7,8,9,11,15,16,17,19,21,22],expect:[12,13,22],experi:11,explain:[2,5,11,18],explan:[5,22],extens:[5,11],extract:[0,1,2,5,6,7,13,14,16,17,18,22],extractdata:0,extractrelatedindividu:[7,18],extractsignificantsnp:16,extractsnp:[0,2,7],facilit:11,fact:[17,22],fail:[0,1,3,4,5,7,8,16,18,20,22],fals:[1,2,4,7,22],fam:[0,1,2,7,8,9,11,13,14,15,16,18,19,21,22],famid:[0,6,14,16,22],famili:[0,3,6,7,18,22],fast:0,faster:22,fedora:[12,13],femal:[6,14,18,22],femalef:[3,14,22],fexact:18,ff7f00:0,ff8800:7,fid1:7,fid2:7,fid:[0,14,17,18],field:[2,17],fifth:11,figur:[0,1,7,12,13,18,22],file_list:4,file_nam:[0,2,7,22],file_typ:4,filelist:0,filenam:[0,2,4,5,6,7,17,22],files_to_merg:0,final_dataset:10,final_dataset_for_genom:0,final_out_prefix:2,find_ref_cent:0,find_related_sampl:[0,3,4],find_the_outli:0,finddupl:6,findflippedsnp:[0,2],findoverlappingsnpswithgoldstandard:2,findoverlappingsnpswithrefer:0,findsnpwithmaf0:9,finduniqu:5,fine:3,finish:[10,12,13],first:[0,1,2],fisher:16,flag:[3,4,8,9,10,18,20],flag_hw:[3,4],flag_maf_0:[9,10,18],flag_maf_zero:[3,4],flaghw:4,flagmaf:4,flip:[0,2,5,14],flipfilenam:[0,2],flipgenotyp:5,flipsnp:[0,2],follow:[0,1,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],font:0,fontsiz:0,format:[0,1,3,5,6,7,8,9,11,14,15,16,17,18,19,21,22],formula:[5,7,22],found:[0,3],founder:18,four:[0,7],fourth:11,frame:0,freq:22,freqfil:7,freqfilenam:9,frequenc:[0,2,5,7],frequency_differ:[3,5,14],from:[0,1,3,4,5,6,7,8,9,10,12,13,14,17,18,20,22],frozenset:22,frq:[5,18],frqfile1:0,frqfile2:0,full:[7,18,22],further:[5,12,13,22],futur:5,gain:22,gather:[5,22],gender:[3,12,13,14,18,20,22],gener:[2,3,11,12,13,14,18,22],genet:11,geno:[3,4,11,14,15],genom:[0,5,7,8,14],genomefilenam:0,genotyp:[1,3,5,6],genotype_1:6,genotype_2:6,get:[5,7,22],get_vers:17,getindexofheteromen:5,give:[11,17],given:[0,8,11],gold_prefix:2,goldfrqfile1:2,good:[4,5,6],grai:[0,22],grand:7,grandchild:18,grandpar:18,graphic:[0,11,18],green:[0,22],grep:18,group:[3,7,18],guid:11,gzip:22,half:[7,18],haploid:[3,4,11],hapmap:[12,13],hapmap_ceu_r23a_filtered_b37:[12,13],hapmap_jpt_chb_r23a_filtered_b37:[12,13],hapmap_yri_r23a_filtered_b37:[12,13],harder:17,hardi:4,harvard:11,have:[0,2,3,5,6,7,8,11,13,14,15,18,20,21,22],header:[0,2,11,14,16,17,18],help:[0,1,5,6,7,8,9,10,11,12,13,15,16,17,18,19,21,22],henc:[2,3,4,5,7,14,17,18,22],here:[0,1,2,4,5,6,7,8,9,12,13,15,16,17,19,21,22],het:[1,7],hetero:[4,18,22],heterohap:4,heterozog:20,heterozygos:[1,3,18,22],heterozygot:11,hethet:7,high:[11,15,18,21],higher:[3,5,6,7,11,18,20],histogram:1,homhom:7,homo_flip:[5,18],homo_hetero:[5,18],homo_hetero_flip:5,homozyg:[0,5,18,22],html:[12,13],http:[3,11,12,13],human:17,hwe:[3,8,14,20],ibs2:[3,7,14,18],ibs2_ratio:7,ibs2_ratio_threshold:7,id_lrr_baf:18,ident:[2,14,18],identif:[3,6,18],identifi:18,idsfilenam:22,ifil:[10,17,21],iid1:7,iid2:7,iid:[0,14,17,18],illumina:[2,14],illumina_to_snp:2,imag:[7,12,13],imposs:0,in_filenam:0,in_prefix:[0,1,4],in_typ:4,includ:[1,5,7,12,13,16,17,20,22],increas:[6,22],indel:[18,20],indep:[0,3,7,14],index:[5,6,7,18],indic:[11,18,20],indid:[0,6,14,16,22],individu:[0,3,6,7,11,18,20,22],info:[5,6],inform:[0,1,5,6,7,8,9,10],informat:11,initi:[0,1,7,14],inprefix:[0,2],inputfil:0,inputfilenam:[0,7,8],inputprefix:0,insert:13,insid:[4,12],instal:10,instead:[1,2,14,17,21,22],integ:[4,11],intens:[3,14,18,22],intensities_fil:3,interact:17,interest:[0,1,7,8,9,12,13,15,16,19,21,22],intermedi:4,interrupt:10,intersect:6,invalid:22,irem:[18,21],is_heterozyg:1,issu:[3,18],jinja2:[12,13],job:[0,7,14],jpg:0,jpt:[0,3,12,13,14],just:[0,3,7,12,13,17],jxf:12,keep:[1,2,3,5,6,14,17,18,22],keepsampl:2,kei:22,kept:7,kmean:0,know:12,known:18,label:[0,7,14,22],larg:[11,18],last:[0,1,2,3,5,6,10,22],later:[3,18],latest:[12,13],latter:11,launch:[7,18],lead:17,learn:[12,13],least:[0,6,7,12,13,22],led:11,left:0,legend:0,less:3,lighter:0,like:[16,22],limit:[0,1,7,14],line:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22],line_per_file_for_sg:7,lineperfil:7,link:[11,18],linux:[10,11],list:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],list_problem_sex:[12,13,18,22],list_problem_sex_id:[10,12,13,18,22],listoffigur:11,listoft:11,lnode:[0,7,14],load:10,localhost:12,localis:5,locat:[1,3,7,10,12,13,14,18,22],log:[7,18,22],look:[0,3,11,14,18],loop:[3,14,16,18],loss:22,low:18,lower:[0,8],lrr:[3,14,18,22],lwalltim:[0,7,14],machin:[12,13],maf:[0,3,4,5,7,9,14,18,20],mai:18,main:[0,1,2,4,5,6,7,8,9,11,12,13,15,16,17,19,21,22],major:17,make:[10,11,22],male:[6,14,18,22],malef:[3,14,22],manag:3,mani:18,manifest:[2,14],manipul:11,manual:[0,1,3,11,22],map:[4,5,6,11,18],mapf:5,margin:0,marker:0,markermissing:4,markers_to_exclud:10,match:0,matplotlib:[12,13],matric:[5,6],matrix:[5,6],maxim:1,maximum:[5,14],mds_file_nam:0,mean:[0,5,22],memori:[1,5,6],men:5,menindex:5,merg:[0,6,7,18,20],merged_related_individu:7,mergegenomelogfil:7,messag:[0,1,2,4,5,6,7,8,9,11,15,16,17,18,19,21,22],metric:11,mgh:11,micro:17,might:[3,12,13,22],million:11,mimic:15,min:[0,3,7,14],mind:[3,4,11,14],minim:11,minimum:[0,7,14,22],minimumnumb:7,minnumb:22,minor:[0,5],minut:[12,13],mirror:[12,13],misc:[2,4],miss:[3,6,11,14,15,18,19,20,21],missig:3,missing:[3,4,11],mitochondri:[1,3],mix:[18,22],mkdir:12,modif:[3,8,10,17],modil:17,moment:12,more:[0,1,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],most:[5,7,17,22],msg:[0,1,2,5,6,7,8,9,15,16,17,19,21,22],multipl:[0,5,6,7,11,22],multipli:[0,3,12,13,14,18],must:[0,1,4,6,11,14,16,18,21,22],mxl_human610:[12,13],na_list:18,name:[0,1,2,3,4,5,6,7,8,9,12,13,14,17,18,22],namespac:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],nan:22,navig:13,nb_compon:0,nb_sampl:1,nbchr23:[3,14,22],nbgeno:[18,22],nbjob:7,nbnocal:[18,22],nbset:7,ncol:0,necessari:18,need:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],needed_markers_chr:22,needed_samples_gend:22,nephew:[7,18],newli:[10,13],next:[4,6],no_statu:7,nocal:[18,22],nocall_hetero_snp:[3,4,14],node:[0,7,14],nof:18,non:18,none:[0,1,2,5,6,7,8,9,15,16,17,18,19,21,22],normal:[4,22],not_chosen_snp:5,not_good_enough:[5,6,18],note:[0,1,3,5,6,7,8,9,12,15,16,19,21,22],notepad:13,noth:12,nucleotid:2,number:[0,1,3,4,5,6,7,8,11,12,13,14,17,18,20,22],numer:[5,7],numpi:[0,1,2,5,6,7,12,13,22],object:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],observ:[6,18],obtain:18,occur:18,often:18,ok_femal:22,ok_mal:22,ok_unknown:22,oldsampl:6,onc:[0,10,12,13],onli:0,open:13,oper:[11,17],option:[0,1,2,3,4,5,6,7,8,9,11],orang:0,order:[0,4,11,18],org:[3,11,12,13],organ:[14,16],origin:[0,1,3,5,6,7,10,17],origindex:6,other:[0,2,4,5,6,7,8,12,13,14,16,18,20,22],otherwis:[1,4,7,22],oulier:0,out:[0,1,2,3,5,6,7,8,9,10,15,16,17,19,21,22],out_dir:2,out_filenam:0,out_prefix:[0,1,2,4,7,22],outfilenam:17,outprefix:[0,2,5,7,8],output_dir:10,outputfilenam:[0,8],outsid:18,overlap:[0,2,7],packag:[11,12,13],page:12,pair:[6,7,18,20],pairwis:[0,3,5,6,7,14],panel:[0,2,14],parallel:[0,2,3,7,14],param:17,paramet:[0,1,2,3,4,5,6,7,8,9,11,15,16,17,18,19,21,22],parent:[7,18],parenthesi:12,pars:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],parse_arg:4,parsearg:[0,1,2,5,6,7,8,9,15,16,17,19,21,22],parser:0,part:[0,3,11,18],particular:11,pass:[8,18],path:[3,10,12,13],pdf:[0,1,14,22],ped:[11,22],pedfil:[1,3,5,6,11,17,18,21],pedigre:[6,22],per:[0,3,7,11,14,17,22],percent:[14,15,21],percentag:[5,6,22],perform:[0,1,3,4,5,6,7,8,9,10,12,13,14,15,16,18,19,21,22],pfilter:[3,14,16],phase:0,physic:[18,20],pip:12,pipelin:[1,3],plan:12,plate:[3,4,11],plate_bia:[3,4,10],plate_inform:3,plate_nam:16,platebia:4,platenam:[14,16],plink:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16],plinl:9,plot_baf_lrr:22,plot_gend:22,plot_heterozygos:1,plot_related_data:7,plot_titl:0,plotmd:0,png:[0,1,3,7,12,13,14,18,22],pngu:11,point:[0,7],poor:11,pop:[0,14],popnam:0,popul:[0,3,12,13,14],population_fil:0,population_file_nam:0,population_file_outli:[0,12,13],population_ord:0,populationfilenam:0,posit:[0,2,3,5,6,14,18,20,22],possibl:[7,14,18,22],potenti:18,ppc:7,ppn:[0,7,14],preced:11,prefix:[0,1,2,4,5,6,7,8,9,11,14,15,16,17,19,21,22],preprocess:[3,10,11],present:[2,5,12,14,18,20,22],previou:[0,3,4,5,6,18],previous:[0,12,22],principal:18,print:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],print_data_to_fil:22,printconcord:[5,6],printduplicatedtpedandtfam:[5,6],printproblem:5,printstatist:6,printuniquetfam:6,probabl:[7,18],probe:18,problem:[0,1,2,4,5,6,7,8,9,10,12,13,15,16,17,18,19,20,21,22],problemat:[5,14,18,22],problematic_femal:22,problematic_mal:22,problematic_sampl:22,problematic_unknown:22,proce:[12,18],process:[1,5,6,7,11],processor:[0,7,14],processtp:[5,6],processtpedandtfam:1,produc:[0,1,3,17,18,20],program:[0,1,2,4,5,6,7,8,9,11,12,13,15,16,17,19,21,22],programerror:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],project:[4,11],prompt:[12,13],proper:[12,14],properti:0,propos:[3,10,11],protocol:[3,10],provid:[3,7,11,17,18,22],prune:[7,18],pruned_data:7,pruning_0:[7,18],pseudo:18,purcel:11,purpl:[0,22],purpos:[0,17],put:[6,9],pydata:[12,13],pygenclean_baf_lrr_plot:[14,22],pygenclean_check_ethn:[0,14],pygenclean_clean_nocall_hetero_snp:[1,14],pygenclean_compare_bim:17,pygenclean_compare_gold_standard:14,pygenclean_duplicated_sampl:[6,14],pygenclean_duplicated_snp:[5,14],pygenclean_expected_result:[12,13],pygenclean_find_outli:[0,14,18],pygenclean_find_related_sampl:[7,14],pygenclean_flag_hw:[8,14],pygenclean_flag_maf_zero:[9,14],pygenclean_gender_plot:[14,22],pygenclean_heterozygosity_plot:1,pygenclean_merge_related_sampl:14,pygenclean_plate_bia:[14,16],pygenclean_plot_md:[0,14],pygenclean_remove_heterozygous_haploid:[14,19],pygenclean_sample_missing:[14,21],pygenclean_sex_check:[14,22],pygenclean_snp_missing:[14,15],pygenclean_subset_data:[3,10,14,17],pygenclean_test:13,pygenclean_test_data:[12,13],pypi:12,python27:10,python:[10,11,12,13],qsub:[0,7,14],quad:[12,13],qualiti:11,queu:11,quick:11,quit:[7,22],radiu:18,rais:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],randomli:[3,6,7,14,18],rang:22,rare:18,rate:[0,1,3,6,11,15,18,21],ratio:[1,3,7,14,18,22],raw:[3,14,18,22],raw_dir:22,read:[0,1,2,4,5,6,7,9,10,11,16,17,22],read_bim:22,read_config_fil:4,read_fam:22,read_intens:22,read_mds_fil:0,read_population_fil:0,read_problematic_sampl:22,read_same_samples_fil:2,read_sex_problem:22,read_source_allel:2,read_source_manifest:2,read_summarized_intens:22,readabl:[0,17],readbim:17,readchecksexfil:22,readmap:5,readpopul:0,readtfam:[5,6],realiti:0,realli:22,reason:18,recarrai:[0,7,22],receiv:20,recent:[5,22],recod:[11,22],recodea:22,recommend:3,red:[0,22],redo:[6,14],redon:18,ref:[0,14],ref_pop:0,ref_pop_nam:0,ref_snp_to_extract:0,refer:[0,1,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],reference_panel:0,referencepopul:0,referenceprefix:0,region:18,rel:[7,18],relat:[0,3,4],related:[0,7,18],related_individu:[7,18],related_individuals_z1:[7,18],related_individuals_z2:[7,18],relatedsampl:[0,4],relationship:18,remain:5,remov:[0,1,3,4,5,10,11,12,13,14,15,17,18,19,20,21],remove_heterozygous_haploid:[3,4,14],removed_dupl:[5,18],removed_snp:[15,18],rempov:4,renam:[0,18],renamesnp:[0,2],replic:[5,6,11,14,18,20],report:[4,11,17,22],repres:[0,4,5,6,7,11,22],represent:[5,6,7],requir:[0,3,4,5,6,7,10,11],required_sampl:2,required_typ:4,requiredpopul:0,rerun:22,resolv:18,resourc:3,respect:[0,1,2,5,6,7,8,9,11,14,15,16,17,18,19,22],respons:4,ressourc:14,rest:6,restart:0,restrict:[0,7,14],result:[0,5,6,7,9,11,12,13,16,18],resutl:0,rid:5,right:0,row:[0,2,14],run:[0,2,3,4,5,7,8],run_check_ethn:4,run_command:4,run_compare_gold_standard:4,run_data_clean_up:4,run_duplicated_sampl:4,run_duplicated_snp:4,run_find_related_sampl:4,run_flag_hw:4,run_flag_maf_zero:4,run_nocall_hetero_snp:4,run_plate_bia:4,run_pygenclean:[10,11,12,13],run_remove_heterozygous_haploid:4,run_sample_missing:4,run_sex_check:4,run_snp_missing:4,run_subset_data:4,runcommand:[0,2,5,7,8,16,17,22],rungenom:7,rungenomesg:7,runplink:[15,19,21],runplinksexcheck:22,runrelated:0,runsg:[0,2],safe:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],safe_main:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],same:[0,2,3,4,5,6,14,17,18,20],same_sampl:2,sampl:[0,1,2,3,4,5],sample_missing:[3,4,11],sampleid:22,samplemissing:4,samples_to_remov:[10,18],samplestoextractfilenam:2,save:[0,1,5,6,7,9,22],save_heterozygos:1,sbi:7,schema:11,scikit:[12,13],scipi:[12,13],scree:0,script:[0,1,3,4,10,11,12,13],second:[0,2],section:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],sed:18,see:[0,1,2,4,5,6,7,8,9,12,15,16,17,18,19,20,21,22],select:[0,11,14,18],selectsnpsaccordingtold:7,separ:[1,2,6,11,14,17,21,22],server:3,set:[0,1,2,4,5,6,7,8,9,11,14,15,16,17,18,19,20,21,22],sex:[3,4,11,12,13],sex_check:[3,4,12,13],sex_problem:22,sexcheck:[4,10,12,13,18],sexcheck_sampl:18,sexual:[5,22],sge:[0,2,3,7,14],shade:0,shift:[0,7,14],should:[0,2,3,4,6,7,8,11,12,13,16,18,22],show:[0,1,5,6,7,8,9,11,12,13,14,15,16,17,19,21,22],shown:[0,1,5,6,7,8,9,11,12,13,15,16,19,21,22],shtml:11,sib:7,sibl:18,sign:5,signific:[8,14,16,18],significant_snp:[10,16,18],simpl:11,simpli:6,sinc:[6,17,18,22],singl:[0,11,22],site:12,six:22,size:[0,7,14],skip:[0,10,14,22],smallest:4,smartpca:0,snp:[0,2,3,4,5,7,8,9,14,15,16,17,18,20,22],snp_flag_threshold_1:[8,10,18],snp_flag_threshold_between_1:8,snp_flag_threshold_bonferroni:18,snp_flag_threshold_x:8,snp_missing:[3,4,11],snp_remov:17,snp_to_flip_in_refer:0,snp_to_remov:0,snp_with_low_concordance_r:18,snpstocomplet:5,snpstoextract:7,snptoextractfilenam:[0,2],snptoremov:5,softwar:[12,13],some:[0,2,17,18],sort:[6,18],sourc:[0,1,2,4,5,6,7,8,9,11,12,14,15,16,17,19,21,22],source_panel:0,source_prefix:2,source_snp_to_extract:0,sourceallel:2,space:[1,2,7,11,14,17],specif:11,specifi:[0,7,8,14,17,22],speed:5,split:[7,17],splitfil:7,squar:4,stage:18,standalon:[0,1,5,6,7,8,9,11,14,15,16,17,18,19,21,22],standard:0,start:[0,1,3,5,12,13],statgen:[3,11,12,13],statist:[2,4,5,6,11],statu:[5,7,18,22],stderr:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],step10:4,step11:4,step12:4,step1:4,step2:4,step4:4,step5:4,step6:4,step7:4,step8:4,step9:4,step:[0,1,3,4,5,6,7,8,9,10,11,12,13,15,16,17],still:18,sting:8,stop:[5,6,8,22],str:[0,1,2,4,5,6,7,8,9,15,16,17,19,21,22],strand:2,strict:0,string:[0,1,2,4,5,6,7,8,9,14,15,16,17,19,21,22],stringent:[0,3],structur:[4,12,13],studi:11,subprocess:[0,4,5,7,8,16,22],subsert:18,subset:[3,4,7,8,10,11],subset_data:4,suffix:4,suit:10,summar:[6,14,22],summari:[5,6,11,18],summarized_intens:22,summur:20,sure:[3,10,18],system:[3,11,12],tab:[2,11,14,17,18],tabl:[11,14,18],tabul:[1,2,11,14,17,21,22],take:[0,2],taken:18,tar:[12,13],task:[0,7,14],tell:[1,7,11,17],temporari:7,tend:7,termin:12,test:[1,3,7,8],test_pygenclean:12,text:[0,4,11,12,13,18],tfam:[0,1,5,6,11,18,21],tfamfilenam:5,tfile:[1,4,5,6,10,11,17,21],than:[0,3,5,6,7,8,11,14,15,17,18,20,21],the_typ:4,thealpha:0,thecolor:0,thei:[0,2,5,12,13,14,17,18,20],thelabel:0,them:[0,2,3,9,10,17,18,22],themark:0,theorder:0,therhold:8,thesiz:0,theta:22,thi:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22],third:[0,11],thorough:11,those:[0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,21,22],though:14,three:[0,3,5,7,8,11,14,16,17,18,22],threshold:[0,3,5,6,7,8,14,15,16,18,20,21,22],threshold_1:[8,18],threshold_bonferroni:18,threshold_x:8,through:[5,12,13],throughput:11,time:[0,4,7,12,13,14,17,18],titl:[0,3,14],toaddprefix:6,togeth:[0,6,7,11],too:[0,18],tool:[11,18],top:[0,2,14],toreadprefix:5,total:[5,6,12,13,18,20],tped:[1,5,6,11,18,21],tpedsampl:6,traceback:[5,22],transpos:[1,2,3,4,5,6,11,17,18,21],treat:18,tri:[0,4,5,7,8,16,22],triangl:22,truecomplet:5,trueconcord:5,tupl:[0,1,4,5,6,22],twin:[7,18,20],two:[0,1,2,3,5,6,7,8,11,12,13,14,15,17,18,22],txt:[3,10,12,13,16,18,22],type:[0,1,2,4,5,6,7,8,9,12,13,14,15,16,17,19,21,22],typic:11,uncl:[7,18],uncom:3,uncorrel:18,undetect:7,unflipp:0,uninform:3,uniq:18,uniqu:[5,6,22],unique_sampl:6,unique_snp:5,uniquesampl:6,uniquesnp:5,unknown:[7,22],unkown:5,unless:22,unnecessari:[2,14],unrel:[7,18],until:18,updat:[0,2,5,6],update_nam:0,updatefilenam:[0,2],upload:[12,13],usabl:[3,4],usag:[0,1,5,6,7,8,9,11,15,16,17,19,21,22],use_marker_nam:2,use_sg:2,user:[0,1,2,3,5,6,7,8,9,11,15,16,17,18,19,21,22],usernam:12,usual:[5,12,17,18],util:11,v1_h:[12,13],valu:[0,1,2,3,4,5,6,7,8,9,12,13,14,15,16,17],valuabl:[12,13],valueerror:22,variabl:[0,4,6,7,8,16,22],variou:5,verifi:18,versa:22,version:[0,1,2,4,5,6,7,8,9,11,12,13,15,16,17,19,21,22],via:11,vice:22,virtual:10,virtualenv:12,visual:1,wai:[12,13,17],walltim:[0,7,14],want:[0,3,10,12,13,14,18],warn:[2,14],web:12,websit:11,weinberg:4,went:3,were:[0,1,3,5,6,7,10,12,13,15,16,17,18,21,22],weren:5,what:[17,22],when:[0,5,6,7,12,13,14,17,18,22],where:[0,3,4,5,6,7,12,13,14,22],whether:0,which:[0,1,2,3,4,5,8,11,12,14,17,18,22],who:0,why:18,wich:21,wide:8,window:[0,7,10,11],without:[0,5,18,22],without_hh_genotyp:[10,18,19],word:[12,13],work:[5,6,10,11,12,13,17],would:22,write:[0,5,6,12,16,17],written:[5,6],www:[3,11],x11:[0,1,14,22],xaxi:[0,3,14],xlabel:[0,3,14,22],xlim:1,xxy:[18,22],yaxi:[0,3,14],yellow:0,yet:1,ylabel:[0,3,7,14,22],ymax:1,you:[0,3,7,8,10,11,12,13,14,18],your:[0,7,10,12,13,14],yri:[0,3,12,13,14],yri_popul:3,yyyi:10,zero:[4,5,6],zeroed_out:[5,6],zxf:12},titles:["Ethnicity Module","Clean No Call and Only Heterozygous Markers Module","Comparison with a Gold Standard Module","Configuration Files","The Data Clean Up Module","Duplicated Markers Module","Duplicated Samples Module","Related Samples Module","Hardy Weinberg Equilibrium Module","Minor Allele Frequency of Zero Module","How to Run the Pipeline","Welcome to pyGenClean&#8217;s documentation!","Linux Installation","Windows Installation","List of Modules and their Options","Marker Missingness Module","Plate Bias Module","Plink Utils","Proposed Protocol","Heterozygous Haploid Module","Result Summary Table","Sample Missingness Module","Sex Check Module"],titleterms:{about:11,activ:[12,13],algorithm:[0,1,5,6,7,8,9,11,13,15,16,17,19,21,22],allel:[9,14,18],appendix:11,baf_lrr_plot:22,bia:[14,16,18],bim:17,call:[1,14,18],check:[14,18,22],check_ethn:[0,14],clean:[1,4,14,18,20],clean_nocall_hetero_snp:1,code:2,compar:17,compare_bim:17,compare_gold_standard:14,comparison:[2,14],conda:[12,13],configur:[3,11],data:[4,14,20],dataset:17,document:11,duplic:[5,6,14,18],duplicated_sampl:[6,14],duplicated_snp:[5,14],dupsampl:6,dupsnp:5,environ:[12,13],equilibrium:[8,14,18],ethnic:[0,14,18],fifth:18,file:[0,1,2,3,5,6,7,8,9,11,15,16,17,19,21,22],find:0,find_outli:0,find_related_sampl:[7,14],first:[3,18],flag_hw:[8,14],flag_maf_zero:9,flaghw:8,flagmaf:9,fourth:18,frequenc:[9,14,18],gender_plot:22,genotyp:11,gold:[2,14],haploid:[14,18,19],hardi:[8,14,18],heterohap:19,heterozyg:[1,14,18,19],heterozygosity_plot:1,heterozygot:18,how:10,ibd:18,inform:[11,20],input:[0,1,5,6,7,8,9,11,15,16,19,21,22],instal:[11,12,13],introduct:11,linux:12,list:14,marker:[1,5,14,15,18],markermissing:15,merge_related_sampl:7,mind:18,miniconda:[12,13],minor:[9,14,18],missing:[14,15,18,21],modifi:0,modul:[0,1,2,4,5,6,7,8,9,14,15,16,18,19,21,22],nocallhetero:1,onli:[1,14,18],option:[14,18],outlier:0,output:[0,1,2,5,6,7,8,9,15,16,19,21,22],pipelin:10,plate:[14,16,18],plate_bia:[14,16],platebia:16,plink:17,plinkutil:[0,17],plot:[0,1,7,22],plot_mds_standalon:0,preprocess:18,procedur:[0,1,5,6,7,8,9,15,16,19,20,21,22],propos:18,protocol:[11,18],pygenclean:[0,1,5,6,7,8,9,11,12,13,15,16,17,19,21,22],relat:[7,14,18],relatedsampl:7,remove_heterozygous_haploid:19,requir:[12,13],result:20,run:10,sampl:[6,7,14,18,21],sample_missing:[14,21],samplemissing:21,script:14,second:[3,18],sex:[14,18,22],sex_check:[14,22],sexcheck:22,share:18,snp_missing:[14,15],standard:[2,14],step:18,subset:[14,17,18],subset_data:17,summari:20,tabl:20,test:[12,13],third:18,updat:[12,13],util:17,valu:18,virtual:12,weinberg:[8,14,18],welcom:11,window:13,zero:[9,14,18]}})