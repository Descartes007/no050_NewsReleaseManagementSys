<%@ page language="java" contentType="text/html;charset=gb2312" import="com.util.*" %>
<%		// �½�һ��SmartUpload����
String url=request.getParameter("url");
	SmartUpload su = new SmartUpload();

		// ��ʼ��

	su.initialize(pageContext);

		// �趨contentDispositionΪnull�Խ�ֹ������Զ����ļ���

		//��֤������Ӻ��������ļ��������趨�������ص��ļ���չ��Ϊ

		//docʱ����������Զ���word��������չ��Ϊpdfʱ��

		//���������acrobat�򿪡�

	su.setContentDisposition(null);

		// �����ļ�
	//url=Common.toChineseAndTrim(url);
	su.downloadFile(url);

%>