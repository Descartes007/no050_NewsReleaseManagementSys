<%@ page language="java" import="java.util.*" contentType="text/html;charset=gb2312" %>
<%@ include file="iframe/head.jsp" %>
<TABLE class=MainTable cellSpacing=0 cellPadding=0 width="100%" align=center 
border=0>
<TR>
<TD>
<TABLE class=dragTable id=viewarticle cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
  <TBODY>
  <TR>
    <TD class=head>
            <H3 class=L></H3><FONT 
                        color=#000000>�����ڵ�λ�ã�<SPAN 
                        style="TEXT-DECORATION: none"> ��Ա��¼ &gt;&gt; �һ�����</FONT>
	</TD>
	</TR>
  </TBODY>
</TABLE>

<script type="text/javascript">
function lostpwd()
{
	if(document.form1.username.value=="")
	{
		alert("�������û�����");
		document.form1.username.focus();
		return false;
	}
	if(document.form1.question.value=="")
	{
		alert("������������ʾ���⣡");
		document.form1.question.focus();
		return false;
	}
	if(document.form1.answer.value=="")
	{
		alert("��������ʾ����𰸣�");
		document.form1.answer.focus();
		return false;
	}
		document.form1.method.value="lostpwd";
		form1.submit();
}
</script>
      <DIV align=center>
      <TABLE class=dragTable  cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
        <TBODY>
        <TR>
          <TD width=100% align=left  bgColor=#c8c8c8 height=28>��
		  <SPAN class=black><strong><FONT color=blue>����ϸ��д�������ϣ�</FONT></strong></SPAN></TD></TR>
        <TR>
          <TD><FORM name="form1" action="<%=basePath%>Member" method="post">
            <TABLE   height=170 cellSpacing=0  cellPadding=0 width="100%"  border=0 hspace="12">
            <TBODY>
              
              <INPUT type=hidden  name="method"> 
              <TR >
                <TD align=right width="38%"  height=30>�� �� ��:</TD>
                <TD width="62%"  height=30 align=left>
				<INPUT class=inputb  size=22 name=username >
				</TD>
				</TR>
              <TR class=black >
                <TD align=right width="38%"  height=30>��ʾ����:<input type=hidden name=reg_type value=person></TD>
                <TD width="62%"  height=30 align=left>
				<INPUT class=inputb   size=22 name=question >
				</TD>
				</TR>
              <TR class=black >
                <TD align=right width="38%"  height=30>�����:</TD>
                <TD width="62%"  height=30 align=left>
				<INPUT class=inputb  size=22 name=answer > 
				</TD>
				</TR>
              <TR class=black >
                <TD align=middle  colSpan=2 height=40>
				<img src=<%=basePath %>images/sub.gif onclick="lostpwd()" border=0> ���� <img src=<%=basePath %>images/back.gif onclick="window.location='<%=basePath %>'" border=0> 
                
                </TD>
				</TR>
			
			</TBODY>
			</TABLE>
</FORM>
			 
			</TD>
			</TR>
			</TBODY>
			</TABLE>��
			</DIV>
<%@ include file="iframe/foot.jsp"%>