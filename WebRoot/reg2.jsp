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
                        color=#000000>�����ڵ�λ�ã���Ա����&gt;&gt; ��д����</FONT>
	</TD>
	</TR>
  </TBODY>
</TABLE>


      <DIV align=center>
      <TABLE class=dragTable  cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
        <TBODY>
        <TR>
          <TD width=100% align=left  bgColor=#c8c8c8 height=28>��
		  <SPAN class=black><strong><FONT color=blue>����ϸ��д�������ϣ�</FONT></strong></SPAN></TD></TR>
        <TR>
          <TD><FORM name="regbb" action="<%=basePath%>Member" method="post">
            <TABLE   height=170 cellSpacing=0  cellPadding=0 width="100%"  border=0 hspace="12">
            <TBODY>
              
              <INPUT type=hidden  name="method"> 
              <TR >
                <TD align=right width="38%"  height=30>�� �� ��:</TD>
                <TD width="62%"  height=30 align=left><font color=red><%=request.getAttribute("message")==null?"":request.getAttribute("message")+"<br>" %></font>
				<INPUT class=inputb id=username maxLength=10 size=21 name=username value='<%=request.getAttribute("username")==null?"":request.getAttribute("username") %>' onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')" >&nbsp; <input type=button value="�鿴�Ƿ�����" onClick="sameREGcheck()" > ��С��4λ
				</TD>
				</TR>
              <TR class=black >
                <TD align=right width="38%"  height=30>��½����:</TD>
                <TD width="62%"  height=30 align=left>
				<INPUT class=inputb id=password type=password maxLength=16 size=22 name=password onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')" > 6λ����
				</TD>
				</TR>
              <TR class=black >
                <TD align=right width="38%"  height=30>����ȷ��:<input type=hidden name=reg_type value=person></TD>
                <TD width="62%"  height=30 align=left>
				<INPUT class=inputb id=reg_pwd2 type=password maxLength=16 size=22 name=reg_pwd2 onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')" > 
				</TD>
				</TR>
             <TR class=black >
                <TD align=middle  colSpan=2 height=40>
				<img src=<%=basePath %>images/sub.gif onclick="checkREG()" border=0> ���� <img src=<%=basePath %>images/back.gif onclick="window.location='<%=basePath %>'" border=0> 
                
                </TD>
				</TR>
			
			</TBODY>
			</TABLE></FORM>
	 
			</TD>
			</TR>
			</TBODY>
			</TABLE>��
			</DIV>
<%@ include file="iframe/foot.jsp"%>