@echo �����������ʽ������Ӳ��� -Pproduct
@echo ��ѡ�������� -Ptest ����Ի���war�� -Pproduct ����������war�� -Pliux��linux�����µ�war��
::ע��
:war:manifest
:���ñ��� -Dclient=NL
@echo ʾ��:
@echo war.bat -e "-Dclient=NL" 
@echo  -e ��ӡ��ϸ���� "-Dclient=NL" ���ñ��� trunkΪNL
@MAVEN_OPTSΪjava���������������:MAVEN_OPTS="-Xms128m -Xmx512m"
::
set MAVEN_OPTS="-Dfile.encoding=UTF-8"
mvn clean scm:update process-classes  war:war  %1 %2 %3 %4 %5 %6 %7 %8 %9
pause