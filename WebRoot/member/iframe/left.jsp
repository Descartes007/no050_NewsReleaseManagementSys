<%@ page language="java" import="java.util.*" contentType="text/html;charset=gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
<TITLE>��Ա��������</TITLE>
<META http-equiv=Content-Language content=zh-cn>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<LINK href="<%=basePath %>member/images/Admin_Style.css" rel=stylesheet>
<META content="MSHTML 6.00.2900.3243" name=GENERATOR></HEAD>
<SCRIPT language="JavaScript" type="text/JavaScript">
<!--
var array = new Array();//����˳��
 

function expand(id_value){
  var tmp;
  eval("tmp=document.getElementById('id_"+id_value+"').style.display");
  if(tmp==''){
    eval("document.getElementById('id_"+id_value+"').style.display='none'");
  }else{
   for(i=0;i<array.length;i++){
      eval("document.getElementById('id_"+array[i]+"').style.display='none'");
  }
    eval("document.getElementById('id_"+id_value+"').style.display=''");
  }  
 }
 
//-->
</SCRIPT>

<%
	String member=(String)session.getAttribute("member");
	String type=(String)session.getAttribute("type");
	if(member==null||type==null){
		response.sendRedirect(path+"/error.jsp");
	}
	else{
	    String url="info.jsp";
	    if(type.trim().equals("co"))url="coinfo.jsp";
%>
<BODY >
<TABLE bgColor=#eef8fe  class=HeaderTdStyle height="100%" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
    <TD vAlign=top align=middle>
      <TABLE  height=24 cellSpacing=0 cellPadding=0 width="100%" border=0>
        <TBODY>
        <TR>
          <TD align=middle ><IMG height=17 src="<%=basePath %>member/images/sys.gif" width=21>
          <a href="<%=basePath %>member/iframe/main.jsp" target="MainFrame">������ҳ</a></TD></TR></TBODY></TABLE>
      <TABLE  bgColor=#eef8fe   height="100%" cellSpacing=0 cellPadding=0 width="100%" 
      border=0>
        <TBODY>
        <TR>
          <TD vAlign=top height="100%">
          <DIV style="OVERFLOW: auto; WIDTH: 100%; HEIGHT: 96%" align=center>
<TABLE  bgColor=#eef8fe cellSpacing=0 cellPadding=0 width="90%" align=center border=0>
  <TBODY>
  <TR ParentID="SystemLastArticle" AllParentID="SystemLastArticle">
  <TD noWrap width="35%">
  <TABLE width="100%" border="0" align="center"style="cursor:hand" onclick=javascript:expand(1)>
    <TR>
    <TD height="31" background="<%=basePath %>member/images/linkbg1.gif">&nbsp;</td>
    <TD background="<%=basePath %>member/images/linkbg1.gif" > <a href="<%=basePath %>" target="_top">������վ��ҳ</a></TD></TR>
    </TABLE>
  </TD>
  </TR> 
  <TR ParentID="SystemLastArticle" AllParentID="SystemLastArticle">
  <TD noWrap width="35%">
  <TABLE width="100%" border="0" align="center"style="cursor:hand" onclick=javascript:expand(1)>
    <TR>
    <TD height="31" background="<%=basePath %>member/images/linkbg1.gif">&nbsp;</td>
    <TD background="<%=basePath %>member/images/linkbg1.gif" > <a href="<%=basePath %>member/info/editpwd.jsp" target="MainFrame">�޸ĵ�½����</a></TD></TR>
    </TABLE>
  </TD>
  </TR>
    <TR ParentID="SystemLastArticle" AllParentID="SystemLastArticle">
  <TD noWrap width="35%">
  <TABLE width="100%" border="0" align="center"style="cursor:hand" onclick=javascript:expand(1)>
    <TR>
    <TD height="31" background="<%=basePath %>member/images/linkbg1.gif">&nbsp;</td>
    <TD background="<%=basePath %>member/images/linkbg1.gif" ><a href="<%=basePath %>member/info/<%=url %>" target="MainFrame">�޸���ϸ����</a></TD></TR>
    </TABLE>
  </TD>
  </TR>
  
  
  <TR ParentID="SystemLastArticle" AllParentID="SystemLastArticle">
  <TD noWrap width="35%">
  <TABLE width="100%" border="0" align="center"style="cursor:hand" onclick=javascript:expand(1)>
    <TR>
    <TD height="31" background="<%=basePath %>member/images/linkbg1.gif">&nbsp;</td>
    <TD background="<%=basePath %>member/images/linkbg1.gif" ><a href="<%=basePath %>member/ss/index.jsp" target="MainFrame">�ҵ�������¼</a></TD></TR>
    </TABLE>
  </TD>
  </TR>
   
  <TR ParentID="SystemLastArticle" AllParentID="SystemLastArticle">
  <TD noWrap width="35%">
  <TABLE width="100%" border="0" align="center"style="cursor:hand" onclick=javascript:expand(3)>
  <TR>
    <TD height="31" background="<%=basePath %>member/images/linkbg1.gif">&nbsp;</td>
    <TD background="<%=basePath %>member/images/linkbg1.gif" ><a href="<%=path%>/Login?method=memberexit" target="_top">�˳���½״̬</a></TD></TR>
  </TABLE>
  
  </TD>
  </TR>
   </TABLE>
  </TD>
  </TR>
  </TBODY>
</TABLE>
    </TD>
    </TR>
    </TBODY>
    </TABLE>
</BODY>
<%} %>
</HTML>
