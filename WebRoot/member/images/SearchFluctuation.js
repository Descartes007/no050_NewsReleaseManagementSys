//Search For Kesion CMS
//Version 3.0
//Powered By Kesion.Com
var normal='slategray';   //color;
var zindex=10000;         //z-index;
var openTF=false;
var width=165,height=window.document.body.offsetHeight-5;
var left=0,top=0,title='����С����';
var SearchBodyStr=''
                   +'<table width="100%" border="0" cellspacing="0" cellpadding="0">'
				   +'<form name="searchform" target="MainFrame" method="post">'
                   +'<tr> '
                   +'<td height="25"><strong>�����������ȫ��������������</strong></td>'
                   +' </tr>'
                   +'<tr><td height="25">ȫ���򲿷ֹؼ���</td></tr>'
                   +'<tr><td height="25"><input style="width:95%" type="text" name="KeyWord"></td></tr>'
                   +'  <tr><td height="25">������Χ</td></tr>'
                   +'  <tr><td height="25"> <select style="width:95%" name="SearchArea" onchange="SetSearchTypeOption(this.value)">'
                   +'     </select></td></tr>' 
				   +'<tr><td height="25">��������</td></tr>'
                   +'<tr><td height="25"><select style="width:95%" name="SearchType">'
                   +'</select></td></tr>'
				   +'  <tr id="DateArea" onclick="setstatus(this)" style="cursor:hand"><td height="25"><strong>ʲôʱ���޸ĵ�?</strong></td></tr>'
				   +'  <tr style="display:none"><td height="25">��ʼ����<input type="text" readonly style="width:80%" name="StartDate" id="StartDate">'
                   +'  <span style="cursor:hand" onClick=OpenThenSetValue("Include/DateDialog.asp",160,170,window,document.all.StartDate);document.all.StartDate.focus();><img src="Images/date.gif" width="20" height="20" border="0" align="absmiddle" title="ѡ������"></span></td></tr>'
				   +'  <tr style="display:none"><td height="25">��������<input type="text" readonly style="width:80%" name="EndDate" id="EndDate">'
                   +'  <span style="cursor:hand" onClick=OpenThenSetValue("Include/DateDialog.asp",160,170,window,document.all.EndDate);document.all.EndDate.focus();><img src="Images/date.gif" width="20" height="20" border="0" align="absmiddle" title="ѡ������"></span></td></tr>'
                   +'  <tr><td height="40" align="center"><input type="submit" name="SearchButton" value="��ʼ����" onclick="return(SearchFormSubmit())"></td></tr>'
				   +'</form>'
				   +'  <tr><td><strong>ʹ��˵��:</strong></td></tr>'
				   +'  <tr><td> �� ���������ñ������������������¡�ͼƬ������Flash��ר�⡢��ǩ��JS��,������������Ŀ¼������Ƶ�����ơ���Ŀ���ƣ���ǩĿ¼��</td></tr>'
				   +'  <tr><td> �� �� <font color=red>Ctrl+F</font> ���Կ��ٽ��д򿪻�ر�����С����</td></tr>'
                   +'</table>'
        var str=""
               +"<div id='SearchBox' "
               + "style='display:none;"
               + "z-index:" + zindex + ";"
               + "width:" + width + ";"
               + "height:" + height + ";"
               + "left:" + left + ";"
               + "top:" + top + ";"
               + "background-color:" + normal + ";"
               + "color:black;"
               + "font-size:12px;"
               + "font-family:Verdana, Arial, Helvetica, sans-serif;"
               + "position:absolute;"
               + "cursor:default;"
               + "border:3px solid " + normal + ";"
               + "'"
               + ">"
                       + "<div "
                       + "style='"
                       + "background-color:" + normal + ";"
                       + "width:" + (width) + ";"
                       + "height:23;"
                       + "color:white;"
                       + "' "
					   + ">"
                               + "<span style='width:" + (width-2*12-4) + ";padding-left:3px;'>" + title + "</span>"
                               + "<span id='Close' style='width:20;border-width:0px;color:white;font-family:webdings;' onclick='CloseSearchBox(this)'>r</span>"
                       + "</div>"
                               + "<div style='"
                               + "width:158;overflow:auto;"
                               + "height:" + (height-20-4) + ";"
                               + "background-color:white;"
                               + "line-height:14px;"
                               + "word-break:break-all;"
                               + "padding:3px;"
                               + "'>" + SearchBodyStr + "</div>"
               + "</div>"
               + "<div style='display:none;"
               + "width:" + width + ";"
               + "height:" + height + ";"
               + "top:" + top + ";"
               + "left:" + left + ";"
               + "z-index:" + (zindex-1) + ";"
               + "position:absolute;"
               + "background-color:black;"
               + "filter:alpha(opacity=40);"
               + "'></div>";
//�ر�;
function CloseSearchBox(el)
{   if (el.id=='Close')
	  { var twin = el.parentNode.parentNode;
        var shad = twin.nextSibling;
	   	   	twin.style.display = "none";
            shad.style.display = "none";
			openTF=false;
			SearchBodyStr=null;
			str=null;
       }
}
function initial()
{
if (!openTF)
 {
 document.body.insertAdjacentHTML("beforeEnd",str);
 openTF=true;
 }
}
//��ʼ��;
function initializeSearch(SearchArea)
{
 initial();
 initialSearchAreaOption(SearchArea);
if (document.all.SearchBox.style.display=='none')
 {
  document.all.SearchBox.style.display='';
  if (document.forms[0].disabled==false) document.forms[0].focus();
 }
 else
 document.all.SearchBox.style.display='none';
}
function initialSearchAreaOption(SearchArea)
{	 var EF=false;
     var TextArr=new Array('��������','ͼƬ����','��������','��������','�̳�����','Ӱ������','������Ϣ','ר������','��������վ��','ϵͳ������ǩ','�Զ��庯����ǩ','�Զ��徲̬��ǩ','ϵͳ JS','���� JS','����Ա')
     var valueArr=new Array('Article','Picture','DownLoad','Flash','Shop','Movie','Supply','Special','Link','SysLabel','DIYFunctionLabel','FreeLabel','SysJS','FreeJS','Manager')
	  for(var i=0;i<valueArr.length;++i)
	   if (SearchArea==valueArr[i]) 
	    { 
		  EF=true;
		  break;
		 }
	  if (!EF) return false; 
	  document.all.KeyWord.value='';
	  document.all.SearchArea.length=0;
      for (var i=0;i<TextArr.length;++i)
    	{
		    document.all.SearchArea.options[document.all.SearchArea.length] = new Option(TextArr[i],valueArr[i]);
		    if (SearchArea==valueArr[i])
	        document.all.SearchArea.options(i).selected=true;
		} 
	//����Ȩ�޼��,��û��Ȩ�޵�����ģ��,��������	
	 var n=0;
	for (var i=0;i<TextArr.length;++i)
	   {   var removeTF=false;
	       if (valueArr[i]!=SearchArea)
	   	  { if (valueArr[i]=='Article' && SearchArticlePower=='False')
			   removeTF=true;
			if (valueArr[i]=='Picture' && SearchPicturePower=='False')
			   removeTF=true;  
			if (valueArr[i]=='DownLoad' && SearchDownLoadPower=='False')
			   removeTF=true; 
			if (valueArr[i]=='Flash' && SearchFlashPower=='False')
			   removeTF=true; 
			if (valueArr[i]=='Shop' && SearchShopPower=='False')
			   removeTF=true; 
			if (valueArr[i]=='Movie' && SearchMoviePower=='False')
			   removeTF=true; 
			if (valueArr[i]=='Supply' && SearchSupplyPower=='False')
			   removeTF=true; 
	   	    if (valueArr[i]=='Special' && SearchSpecialPower=='False')  
			   removeTF=true;
	   	    if (valueArr[i]=='Link' && SearchLinkPower=='False')  
			   removeTF=true;
			if (valueArr[i]=='SysLabel' && SearchSysLabelPower=='False')
			   removeTF=true;
			if (valueArr[i]=='DIYFunctionLabel' && SearchDIYFunctionLabelPower=='False')
			   removeTF=true;
			if (valueArr[i]=='FreeLabel' && SearchFreeLabelPower=='False')
			   removeTF=true;
			if (valueArr[i]=='SysJS' && SearchSysJSPower=='False')
			   removeTF=true;
			if (valueArr[i]=='FreeJS' && SearchFreeJSPower=='False')
			   removeTF=true;
			if (valueArr[i]=='Manager' && SearchAdminPower=='False')
			   removeTF=true;
		   }
		  if (removeTF==true)  
		    {document.all.SearchArea.options.remove(i-n);
			 n++;
			}	
	   }
	SetSearchTypeOption(SearchArea); 
}
function SetSearchTypeOption(AreaType)
{	 //Remove all Option
    var TextArr=new Array();
    document.all.SearchType.options.length=0
  switch (AreaType)
  {
    case 'Article':
	     if (SearchArticlePower=='False')          //��������Ȩ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('����(��)����','��������','���¹ؼ���','��������','����¼��')
	      }
		  break;
    case 'Special':
	     if (SearchSpecialPower=='False')        //����ר��Ȩ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('ר������','��Ҫ˵��')
	     }
		 break;
    case 'Picture':
	     if (SearchPicturePower=='False')          //����ͼƬȨ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('ͼƬ����','ͼƬ���','ͼƬ�ؼ���','ͼƬ����','ͼƬ¼��')
	      }
		  break;
    case 'DownLoad':
	     if (SearchDownLoadPower=='False')          //��������Ȩ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('��������','���ؼ��','���عؼ���','��������/������','����¼��')
	      }
		  break; 
	case 'Flash':
	     if (SearchFlashPower=='False')          //����FlashȨ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('��������','�������','�����ؼ���','��������','����¼��')
	      }
		  break; 
	case 'Shop':
	     if (SearchShopPower=='False')          //������ƷȨ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('��Ʒ����','��Ʒ����','��Ʒ�ؼ���','����','�۸�')
	      }
		  break; 
    case 'Movie':
	     if (SearchMoviePower=='False')          //����ӰƬȨ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('ӰƬ����','ӰƬ����','ӰƬ�ؼ���','��Ҫ��Ա','�����')
	      }
		  break;
	case 'Supply':
	     if (SearchSupplyPower=='False')          //����ӰƬȨ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('��Ϣ����','��Ϣ����','�����')
	      }
		  break;
	case 'Special':
	     if (SearchSpecialPower=='False')       //����ר��Ȩ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('ר������','��Ҫ˵��')
	     }
		 break;
	case 'Link':
	     if (SearchLinkPower=='False')       //������������վ��Ȩ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	      document.all.DateArea.style.display="";
	      TextArr=new Array('վ������','վ������')
	     }
		 break;
	case 'SysLabel':
	     if (SearchSysLabelPower=='False')       //����ϵͳ��ǩȨ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	     document.all.DateArea.style.display="";
	     TextArr=new Array('ϵͳ��ǩ����','ϵͳ��ǩ����')
		 }
	     break;
	case 'DIYFunctionLabel':
	     if (SearchDIYFunctionLabelPower=='False')       //�����Զ��庯����ǩȨ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	     document.all.DateArea.style.display="";
	     TextArr=new Array('�Զ��庯����ǩ����','�Զ��庯����ǩ����')
		 }
	     break;
	case 'FreeLabel':
	     if (SearchFreeLabelPower=='False')       //�����Զ��徲̬��ǩȨ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
	     document.all.DateArea.style.display="";
		 TextArr=new Array('�Զ��徲̬��ǩ����','�Զ��徲̬��ǩ����','�Զ��徲̬��ǩ����')
		 }
	     break;
	case 'SysJS':
	     if (SearchSysJSPower=='False')       //����ϵͳJSȨ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
	     document.all.DateArea.style.display="";
		 TextArr=new Array('ϵͳJS ����','ϵͳJS ����','ϵͳJS �ļ���')
		 }
		 break;
    case 'FreeJS' :
		 if (SearchFreeJSPower=='False')       //��������JSȨ�޼��
		 {
		   DisabledSearchFluctuation(true);
		   return;
		 }
		 else
		 {
	     document.all.DateArea.style.display="";
		 TextArr=new Array('����JS ����','����JS ����','����JS �ļ���')
		 }
		 break;
	case 'Manager':	 
		  if (SearchAdminPower=='False')          //��������ԱȨ�޼��
		 {
		  DisabledSearchFluctuation(true);
		  return;
		 }
		 else
		 {
		  DisabledSearchFluctuation(false);
	     document.all.DateArea.style.display="none";
		 TextArr=new Array('����Ա����','����Ա���')
		}
	    break;
  }
  for (var i=0;i<TextArr.length;++i)
	document.all.SearchType.options[document.all.SearchType.length] = new Option(TextArr[i], i);
}
function setstatus(Obj)
  {var today=new Date()
    if (Obj.nextSibling.style.display=='none')
     {
	  Obj.nextSibling.style.display='';
	  document.all.StartDate.value=today.getYear()+'-'+eval(today.getMonth()+1)+'-'+today.getDate();
	 }
	else 
	{
     Obj.nextSibling.style.display='none';
	 document.all.StartDate.value='';
	 }
	if (Obj.nextSibling.nextSibling.style.display=='none')
	{
     Obj.nextSibling.nextSibling.style.display='';
	  document.all.EndDate.value=today.getYear()+'-'+eval(today.getMonth()+1)+'-'+today.getDate();
	}
	else 
     {
	 Obj.nextSibling.nextSibling.style.display='none';
	 document.all.EndDate.value='';
	 }
  }
 function SearchFormSubmit()
  { var form=document.forms[0];
    if (form.elements[0].value=='')
	 {
	   alert('������ؼ���!')
	   form.elements[0].focus();
	   return false;
	 }
   switch (form.elements[1].value)
    {
	  case 'Article':
	       form.action="Admin_Article.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=���¹��� >> <font color=red>�������½��</font>&ButtonSymbol=ArticleSearch';
		   break;
	  case 'Picture':
	       form.action="Admin_Picture.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=ͼƬ���� >> <font color=red>����ͼƬ���</font>&ButtonSymbol=PictureSearch';
		   break;
	  case 'DownLoad':
	       form.action="Admin_Down.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=���ع��� >> <font color=red>�������ؽ��</font>&ButtonSymbol=DownSearch';
		   break;	
	 case 'Flash':
	       form.action="Admin_Flash.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=�������� >> <font color=red>����Flash���</font>&ButtonSymbol=FlashSearch';
		   break;
	 case 'Shop':
	       form.action="Admin_Shop.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=�̳ǹ��� >> <font color=red>������Ʒ���</font>&ButtonSymbol=ProductSearch';
		   break;
	  case 'Movie':
	       form.action="Admin_Movie.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=Ӱ�ӹ��� >> <font color=red>����ӰƬ���</font>&ButtonSymbol=MovieSearch';
		   break;	
	  case 'Supply':
	       form.action="Admin_GQ.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=������� >> <font color=red>������Ϣ���</font>&ButtonSymbol=Disabled';
		   break;
	  case 'Special':
	       form.action="Admin_Special.asp?ChannelID="+ChannelID;
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=ר����� >> <font color=red>����ר����</font>&ButtonSymbol=SpecialSearch';
		   break;
	  case 'Link':
	       form.action="Admin_FriendLink.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=������� >> �������ӹ��� >> <font color=red>������������վ����</font>&ButtonSymbol=LinkSearch';
		   break;
	  case 'SysLabel'  :
	       form.action="Include/Label_Main.asp?LabelType=0";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=��ǩ���� >> <font color=red>����ϵͳ������ǩ���</font>&ButtonSymbol=SysLabelSearch';
		   break;
	 case 'DIYFunctionLabel'  :
	       form.action="Include/Label_Main.asp?LabelType=5";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=��ǩ���� >> <font color=red>�����Զ��庯����ǩ���</font>&ButtonSymbol=DIYFunctionSearch';
		   break;
	  case 'FreeLabel'  :
	       form.action="Include/Label_Main.asp?LabelType=1";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=��ǩ���� >> <font color=red>�������ɱ�ǩ���</font>&ButtonSymbol=FreeLabelSearch';
		   break;
	  case 'SysJS'     :
	  	   form.action="Include/JS_Main.asp?JSType=0";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=JS���� >> <font color=red>����ϵͳJS���</font>&ButtonSymbol=SysJSSearch';
		   break;
	  case 'FreeJS'     :
	  	   form.action="Include/JS_Main.asp?JSType=1";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=JS���� >> <font color=red>��������JS���</font>&ButtonSymbol=FreeJSSearch';
		   break;
	  case 'Manager'     :
	  	   form.action="Admin_Admin.asp";
		   parent.frames['BottomFrame'].location.href='Split.asp?OpStr=����Ա���� >> <font color=red>��������Ա���</font>&ButtonSymbol=ManagerSearch';
		   break;
	}
	form.submit();
  }
function DisabledSearchFluctuation(Flag)
{ if (Flag==true)
   document.all.KeyWord.value='�Բ���,Ȩ�޲���!'; 
  var AllBtnArray=document.body.getElementsByTagName('INPUT'),CurrObj=null;
	for (var i=0;i<AllBtnArray.length;i++)
	{
		CurrObj=AllBtnArray[i];
		CurrObj.disabled=Flag;
	}
	AllBtnArray=document.body.getElementsByTagName('SELECT'),CurrObj=null;
		for (var i=0;i<AllBtnArray.length;i++)
	{
		CurrObj=AllBtnArray[i];
		CurrObj.disabled=Flag;
	}
}