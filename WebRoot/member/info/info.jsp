<%@ page language="java" import="java.util.*"  contentType="text/html;charset=gb2312"%>
<jsp:useBean id="mb" scope="page" class="com.bean.MemberBean"></jsp:useBean>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<HTML><HEAD>
<LINK href="<%=basePath %>member/images/Admin_Style.css" type=text/css rel=stylesheet>
<LINK href="<%=basePath %>member/images/style.css" type=text/css rel=stylesheet>
<SCRIPT language=JavaScript src="<%=basePath %>images/css/Common.js"></SCRIPT>
<SCRIPT language=JavaScript src="<%=basePath %>member/images/calendar.js"></SCRIPT>
<STYLE type=text/css>
BODY {
	MARGIN-LEFT: 0px; BACKGROUND-COLOR: #ffffff
}
.STYLE1 {color: #ECE9D8}
</STYLE>
</HEAD>
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
<%
	String member=(String)session.getAttribute("member");
	String type=(String)session.getAttribute("type");
	if(member==null||type==null){
		response.sendRedirect(path+"/error.jsp");
	}
	else{
		List list = mb.getRegInfo(member);
		String str="checked";String str2="";
		if(list.get(2).toString().trim().equals("f")){
			str=""; str2="checked";
		}
%>
<BODY oncontextmenu="return false;" onselectstart="return false;" leftMargin=0 background=<%=basePath %>member/images/MainBg.gif topMargin=0 scroll=yes marginheight="0" marginwidth="0">
<TABLE height="100%" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
    <TD align="left" vAlign=top >
	<form action="<%=basePath %>Member?method=UPREGINFO" method="post" name="regform" onSubmit="return checkpersonreg()">
       <TABLE width="100%" border=0 align="center" cellPadding=3 cellSpacing=1 class=tablewidth>
		  <TBODY>
		  <TR align="center" class=head>
			<TD colspan="2" height=23>�޸Ļ�Ա����  <FONT color="#FF0000">**</FONT>Ϊ����д�ֶ�</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >��ʵ������</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb maxLength=24 size=30 name=realname value=<%=list.get(1).toString() %>> <FONT color=#ff0000>**</FONT>
			</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >��&nbsp;&nbsp;&nbsp;&nbsp;��</TD>
			<TD width="70%" align="left" id=map>
			<INPUT type="radio" name="sex" value="m" <%=str %>> �� <input type="radio" name="sex" value="f" <%=str2 %>>Ů
			</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >�������ڣ�</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb maxLength=24 size=30 name=bir value="<%=list.get(3).toString() %>"  readonly onclick="SelectDate(this,'yyyy-MM-dd')"  this.Txt_Date.Attributes["onclick"] = "SelectDate(this,'yyyy-MM-dd')";>  
			</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >��&nbsp;&nbsp;&nbsp;&nbsp;�᣺</TD>
			<TD width="70%" align="left" id=map>
			<select style="WIDTH: 80px"  name="sheng" id="sheng" onchange="ProvinceChange(this, regform.city);">
							          <option selected="selected" value="<%=list.get(4).toString() %>"><%=list.get(4).toString() %></option>
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
							        <option selected="selected" value="<%=list.get(5).toString() %>"><%=list.get(5).toString() %></option>
							        </select> <FONT color=#ff0000>**</FONT>
							        </TD>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >��ϵ�绰��</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb name=telphone maxLength=18 size=30  onkeyup="this.value=this.value.replace(/\D/gi,'')" value="<%=list.get(6).toString() %>"> <FONT color=#ff0000>**</FONT>
			</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >E-mail��</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb  name=email maxLength=50 size=30  value="<%=list.get(7).toString() %>"> <FONT color=#ff0000>**</FONT> <FONT color=#ff6600>(�˵����ʼ��ǳ���Ҫ����������д����</FONT>
			</TD>
		  </TR>
		   <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >������ʾ���⣺</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb maxLength=28 size=30 name=question  value="<%=list.get(8).toString() %>"> <FONT color=#ff0000>**</FONT> ��Ҫ�һ������ʱ��,��ʾ�����⡰����ʲô���֣���
			</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >����ش�</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb maxLength=28 size=30  name=answer value="<%=list.get(9).toString() %>"> <FONT color=#ff0000>**</FONT> ����������Ĵ�,�����Ĵ��ǡ�С�ơ�
			</TD>
		  </TR>
		   <TR align="center" bgColor=#ffffff>
			<TD width="30%" align="right" >��ϸ��ַ��</TD>
			<TD width="70%" align="left" id=map>
			<INPUT class=inputb  name=address maxLength=50 size=30  value="<%=list.get(10).toString() %>"> <FONT color=#ff0000>**</FONT>
			</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD colspan="2" align="center" ><input type="submit" value="�ύ">&nbsp;&nbsp;<input type="reset" value="����"></TD>
		  </TR>
		</TBODY>
	   </TABLE>
	  </form>
    </TD>
  </TR>
  </TBODY>
</TABLE>
</BODY>
<%} %>
</HTML>
