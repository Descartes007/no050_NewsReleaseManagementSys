<%@ page language="java" import="java.util.*"  contentType="text/html;charset=gb2312" %>
<%@ include file="iframe/head.jsp" %>
<SCRIPT language=JavaScript src="<%=basePath %>member/images/city.js"></SCRIPT>
<%
String message = (String)request.getAttribute("message");
	if(message == null){
		message = "";
	}
	if (!message.trim().equals("")){
		out.println("<script language='javascript'>");
		out.println("alert('"+message+"');");
		out.println("</script>");
	}
	request.removeAttribute("message");
%>

  
            <TABLE class=dragTable  height=75 cellSpacing=0 cellPadding=0 width=100% align=center 
            border=0>
              <TBODY>
              <TR>
                <TD class=head>
                  
                      <FONT color=#000000>�����ڵ�λ�ã���Ա����&gt;&gt; ��ϸ����</FONT>
					
					</TD>
					</TR>
              <TR>
                <TD vAlign=top align=middle bgColor=#f5f5f5><BR>
                <FORM id="regform" name="regform" action="<%=basePath%>Member?method=PREG" method="post">
                  <TABLE cellSpacing=0 cellPadding=0 width=100% bgColor=#f5f5f5 border=0>
                    
                    <TBODY>
                    <TR>
                      <TD align=left class=white width=100% bgColor=#c8c8c8 height=23>��
					  <SPAN class=black><FONT color=blue><strong>�û�ע�������Ϣ: </strong></FONT>�������������������� 
                        <FONT color="#FF0000">**</FONT>Ϊ����д�ֶ�&nbsp;&nbsp;</SPAN></TD></TR>
                    <TR>
                      <TD vAlign=top align=middle bgColor=#ffffff height=209>
                        <DIV align=center>
         <TABLE  height=237 cellSpacing=0  cellPadding=0 width="100%" border=0 hspace="12">
                          <TBODY>
                          <TR e>
                            <TD vAlign=center align=right  height=12>�� �� ����</TD>
                            <TD width=556 height=24 align=left><INPUT class=inputb maxLength=24 size=30  name="username" value="<%=request.getAttribute("username") %>" readonly></TD>
							</TR>
                          <TR >
                            <TD vAlign=center align=right  height=24>��½���룺</TD>
                            <TD width=556 height=24 align=left><INPUT class=inputb maxLength=24 size=30  name="password" value='<%=request.getAttribute("password") %>' readonly></TD></TR>
						  <TR >
						    <TD vAlign=center align=right  height=26>&nbsp;&nbsp;��ʵ������</TD>
						    <TD width=556 height=26 align=left>
							<INPUT class=inputb maxLength=24 size=30 name=realname> <FONT color=#ff0000>**</FONT> </TD></TR>
                          <TR >
                            <TD vAlign=center align=right  height=26>&nbsp;&nbsp;��&nbsp;&nbsp;&nbsp;&nbsp;��</TD>
                            <TD width=556 height=26 align=left>
							<INPUT type="radio" name="sex" value="m" checked="checked"> �� <input type="radio" name="sex" value="f" >Ů</TD></TR>
						  <TR >
						    <TD vAlign=center align=right  height=26>&nbsp;&nbsp;�������ڣ�</TD>
						    <TD width=556 height=26 align=left>
						    <INPUT class=inputb maxLength=24 size=30 name=bir readonly onclick="SelectDate(this,'yyyy-MM-dd')"  this.Txt_Date.Attributes["onclick"] = "SelectDate(this,'yyyy-MM-dd')";>  
						    ��ʽ��2008-01-01</TD></TR>
                          <TR >
                            <TD vAlign=center align=right  height=12>��&nbsp;&nbsp;&nbsp;&nbsp;�᣺</TD>
                            <TD height=12 align=left>                                 
                                  <select style="WIDTH: 80px"  name="sheng" id="sheng" onchange="ProvinceChange(this, regform.city);">
							          <option selected="selected" value="">-��ѡ��-</option>
							          <option value="����">����</option>
							          <option value="���">���</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="������">������</option>
							          <option value="�ӱ�">�ӱ�</option>
							          <option value="ɽ��">ɽ��</option>
							          <option value="���ɹ�">���ɹ�</option>
							          <option value="�Ϻ�">�Ϻ�</option>
							          <option value="����">����</option>
							          <option value="�㽭">�㽭</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="ɽ��">ɽ��</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="�㶫">�㶫</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="�Ĵ�">�Ĵ�</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="����">����</option>
							          <option value="�ຣ">�ຣ</option>
							          <option value="����">����</option>
							          <option value="�½�">�½�</option>
							          <option value="̨��">̨��</option>
							          <option value="���">���</option>
							          <option value="����">����</option>
							        </select>
							        <select style="WIDTH: 80px" name="city" id="city" >
							        <option selected="selected" value="">-��ѡ��-</option>
							        </select>           <FONT color=#ff0000>**</FONT> </TD></TR>              
                          <TR >
                            <TD vAlign=center align=right height=12>��ϸ��ַ��</TD>
                            <TD height=12 align=left>
							<INPUT class=inputb  name=address maxLength=50 size=30 > <FONT color=#ff0000>**</FONT> 
                              </TD></TR>
                          <TR >
                            <TD vAlign=center align=right  height=12>��ϵ�绰��</TD>
                            <TD height=12 align=left>
							<INPUT class=inputb name=telphone maxLength=18 size=30  onkeyup="this.value=this.value.replace(/\D/gi,'')"> <FONT color=#ff0000>**</FONT> </TD></TR>
                          <TR >
                            <TD vAlign=center align=right height=12>E-mail��</TD>
                            <TD height=12 align=left>
							<INPUT class=inputb  name=email maxLength=50 size=30 > <FONT color=#ff0000>**</FONT> 
                              <FONT color=#ff6600>(�˵����ʼ��ǳ���Ҫ����������д����</FONT></TD></TR>
                          <TR >
                            <TD vAlign=center align=right  
                            height=12>&nbsp;&nbsp;������ʾ���⣺</TD>
                            <TD width=556 height=12 align=left>
						<INPUT class=inputb maxLength=28 size=30 name=question> <FONT color=#ff0000>**</FONT> ��Ҫ�һ������ʱ��,��ʾ�����⡰����ʲô���֣���</TD></TR>
                          <TR >
                            <TD vAlign=center align=right  height=17>&nbsp;&nbsp;����ش�</TD>
                            <TD width=556 height=17 align=left>
							<INPUT class=inputb maxLength=28 size=30  name=answer> <FONT color=#ff0000>**</FONT> ����������Ĵ�,�����Ĵ��ǡ�С�ơ� </TD></TR>
                          <TR>
                            <TD vAlign=center align=center width=697 colSpan=2 height=17>
                              <P align=center>
                              <img src=<%=basePath %>images/sub.gif onclick="checkpersonreg()" border=0>
							  </TD>
							  </TR>
							  </TBODY>
							  </TABLE>
							  </DIV>
							  </TD>
							  </TR>
							  </TBODY></TABLE></FORM>
 </TD></TR></TBODY></TABLE>
<%@ include file="iframe/foot.jsp"%>