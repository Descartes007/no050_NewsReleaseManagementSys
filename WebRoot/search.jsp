<%@ page language="java" import="java.util.*" contentType="text/html;charset=gb2312" %>
<%@ include file="iframe/head.jsp" %>
<script type="text/javascript">
<!--
function sn()
{
	if(document.regbb.title.value=="")
	{
		alert("����д���Źؼ���");
		document.regbb.title.focus();
		return false;
	}
}
//-->
</script>
<TABLE class=MainTable cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
<TR>
<TD>
 
 

      <DIV align=center>
      <TABLE class=dragTable  cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
        <TBODY>
        <TR>
          <TD width=100% align=left  bgColor=#c8c8c8 height=28>��
		  <SPAN class=black><strong><FONT color=blue>��������</FONT></strong></SPAN></TD></TR>
        <TR>
          <TD><FORM name="regbb" action="<%=basePath%>sinfo.jsp" method="post" onsubmit="return sn()">
            <TABLE   height=90 cellSpacing=0  cellPadding=0 width="100%"  border=0 hspace="12">
            <TBODY>
              
              
              <TR >
                <TD height=30><br>������Ŀ: <select name="fenlei">
      <%List flist=news.getFenlei();if(!flist.isEmpty()){for(int i=0;i<flist.size();i++){List list2=(List)flist.get(i); %>
    <option value="<%=list2.get(1).toString() %>"><%=list2.get(1).toString() %></option>
    <%}} %>
    </select> ���Źؼ��֣�<INPUT class=inputb name=title type=text maxLength=16 size=22 > <input type=submit value="����">
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
<%@ include file="iframe/foot.jsp" %>