//��֤��Ա���ķ���������Ϣ
function checkold()
{
	if(document.form1.oldname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ʒ���ƣ�");
		document.form1.oldname.focus();
		return false;
	}
	if(document.form1.classtype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.classtype.value=="��ѡ��")
	{
		alert("��ѡ���������ͣ�");
		document.form1.classtype.focus();
		return false;
	}
	if(document.form1.price.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�۸�");
		document.form1.price.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�绰��");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.file_1.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_1.value.substring(form1.file_1.value.length-4,form1.file_1.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_1.focus(); 
			return false; 
		} 
		if(document.form1.description_1.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_1.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_2.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_2.value.substring(form1.file_2.value.length-4,form1.file_2.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_2.focus(); 
			return false; 
		} 
		if(document.form1.description_2.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_2.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_3.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_3.value.substring(form1.file_3.value.length-4,form1.file_3.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_3.focus(); 
			return false; 
		} 
		if(document.form1.description_3.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_3.focus(); 
			return false; 
		} 
	}
}
 //�ϴ�ͼƬ����ͼ
function showPic1(){
     var obj = document.getElementById("file_1") ;
     var url = obj.value ;
     var imgObj = document.getElementById("image_1") ;
     var img_tableObj = document.getElementById("image_table_1") ;
     imgObj.src=url; 
     img_tableObj.style.display="" ;
     imgObj.style.display="" ;
 }
 function showPic2(){
     var obj = document.getElementById("file_2") ;
     var url = obj.value ;
     var imgObj = document.getElementById("image_2") ;
     var img_tableObj = document.getElementById("image_table_2") ;
     imgObj.src=url; 
     img_tableObj.style.display="";
     imgObj.style.display="" ;
 }
 function showPic3(){
     var obj = document.getElementById("file_3") ;
     var url = obj.value ;
     var imgObj = document.getElementById("image_3") ;
     var img_tableObj = document.getElementById("image_table_3") ;
     imgObj.src=url; 
     img_tableObj.style.display="" ;
     imgObj.style.display="" ;
 }

//��Ա���ķ�����ְ��Ϣ������֤
function checkaddjob2()
{
	if(document.form1.job2.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ְְλ��");
		document.form1.job2.focus();
		return false;
	}
	if(document.form1.pay.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���ʴ�����");
		document.form1.pay.focus();
		return false;
	}
	if(document.form1.school.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.school.value=="��ѡ��")
	{
		alert("��ѡ��ѧ����");
		document.form1.school.focus();
		return false;
	}
	if(document.form1.age.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���䣡");
		document.form1.age.focus();
		return false;
	}
	if(document.form1.sheng.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.sheng.value=="��ѡ��")
	{
		alert("��ѡ��ʡ��");
		document.form1.sheng.focus();
		return false;
	}
	if(document.form1.city.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.city.value=="-��ѡ��-")
	{
		alert("��ѡ���У�");
		document.form1.city.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�绰��");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.email.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ���䣡");
		document.form1.email.focus();
		return false;
	}
	if(document.form1.yxq.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ч�ڣ�");
		document.form1.yxq.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length>500)
	{
		alert("��ϸ������������500�����ڣ�");
		document.form1.intro.focus();
		return false;
	}
}
//��Ա���ķ�����Ƹ��Ϣ������֤
function checkaddjob()
{
	if(document.form1.need.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ƹְλ��");
		document.form1.need.focus();
		return false;
	}
	if(document.form1.num.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ƹ������");
		document.form1.num.focus();
		return false;
	}
	if(document.form1.danwei.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ƹ��λ��");
		document.form1.danwei.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�绰��");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.place.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������λ��");
		document.form1.place.focus();
		return false;
	}
	if(document.form1.pay.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���ʴ�����");
		document.form1.pay.focus();
		return false;
	}
	if(document.form1.yxq.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ϣ��Ч�ڣ�");
		document.form1.yxq.focus();
		return false;
	}
	if(document.form1.otherneed.value.replace(/\s+$|^\s+/g,"").length>500)
	{
		alert("��ƸҪ����������500�����ڣ�");
		document.form1.otherneed.focus();
		return false;
	}
}
//��֤���۷�����Ϣ����
function checksalehouse()
{
	if(document.form1.place.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.place.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ڷ�λ��");
		document.form1.place.focus();
		return false;
	}
	if(document.form1.wide.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��������С����ضΣ�");
		document.form1.wide.focus();
		return false;
	}
	if(document.form1.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������ϸ��ַ��");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.housetype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.housetype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.housetype.focus();
		return false;
	}
	if(document.form1.roomtype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.roomtype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.roomtype.focus();
		return false;
	}
	if(document.form1.ceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����¥�㣡");
		document.form1.ceng.focus();
		return false;
	}
	if(document.form1.build.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.build.value=="��ѡ��")
	{
		alert("��ѡ��װ�޳̶ȣ�");
		document.form1.build.focus();
		return false;
	}
	if(document.form1.buildsam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.buildsam.focus();
		return false;
	}
	if(document.form1.usesam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����дʹ�������");
		document.form1.usesam.focus();
		return false;
	}
	if(document.form1.price.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���ݼ۸�");
		document.form1.price.focus();
		return false;
	}
	if(document.form1.age.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.age.value=="��ѡ��")
	{
		alert("��ѡ���������");
		document.form1.age.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("���ݼ����д��������200�����ڣ�");
		document.form1.intro.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.widetel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���ţ�");
		document.form1.widetel.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���룡");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.handset.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�ֻ����룡");
		document.form1.handset.focus();
		return false;
	}
	if(document.form1.befortime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ч�ڣ�");
		document.form1.befortime.focus();
		return false;
	}
	if(document.form1.file_1.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_1.value.substring(form1.file_1.value.length-4,form1.file_1.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_1.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_1.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_1.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_2.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_2.value.substring(form1.file_2.value.length-4,form1.file_2.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_2.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_2.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_2.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_3.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_3.value.substring(form1.file_3.value.length-4,form1.file_3.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_3.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_3.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_3.focus(); 
			return false; 
		} 
	}
}

//��֤¥����Ϣ����
function checknewbuild()
{
	if(document.form1.place.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.place.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ڷ�λ��");
		document.form1.place.focus();
		return false;
	}
	if(document.form1.wide.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��������С����ضΣ�");
		document.form1.wide.focus();
		return false;
	}
	if(document.form1.builder.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������ƣ�");
		document.form1.builder.focus();
		return false;
	}
	if(document.form1.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϸ��ַ��");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.saleaddress.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���۵�ַ��");
		document.form1.saleaddress.focus();
		return false;
	}
	if(document.form1.housetype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.housetype.value=="��ѡ��")
	{
		alert("��ѡ��¥�����ͣ�");
		document.form1.housetype.focus();
		return false;
	}
	if(document.form1.construct.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.construct.value=="��ѡ��")
	{
		alert("��ѡ��¥�̽ṹ��");
		document.form1.construct.focus();
		return false;
	}
	if(document.form1.smianji.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д¥�������");
		document.form1.smianji.focus();
		return false;
	}
	if(document.form1.emianji.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д¥�������");
		document.form1.emianji.focus();
		return false;
	}
	if(document.form1.sceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д¥�̲�����");
		document.form1.sceng.focus();
		return false;
	}
	if(document.form1.eceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д¥�̲�����");
		document.form1.eceng.focus();
		return false;
	}
	if(document.form1.sprice.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д¥�̼۸�");
		document.form1.sprice.focus();
		return false;
	}
	if(document.form1.eprice.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д¥�̼۸�");
		document.form1.eprice.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("¥�̼����д��������200�����ڣ�");
		document.form1.intro.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.widetel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���ţ�");
		document.form1.widetel.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���룡");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.handset.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�ֻ����룡");
		document.form1.handset.focus();
		return false;
	}
	if(document.form1.befortime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ч�ڣ�");
		document.form1.befortime.focus();
		return false;
	}
	if(document.form1.file_1.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_1.value.substring(form1.file_1.value.length-4,form1.file_1.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_1.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_1.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_1.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_2.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_2.value.substring(form1.file_2.value.length-4,form1.file_2.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_2.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_2.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_2.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_3.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_3.value.substring(form1.file_3.value.length-4,form1.file_3.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_3.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_3.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_3.focus(); 
			return false; 
		} 
	}
}
 
//��֤���ⷿ����Ϣ����
function checkrentout()
{
	if(document.form1.place.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.place.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ڷ�λ��");
		document.form1.place.focus();
		return false;
	}
	if(document.form1.wide.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��������С����ضΣ�");
		document.form1.wide.focus();
		return false;
	}
	if(document.form1.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������ϸ��ַ��");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.housetype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.housetype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.housetype.focus();
		return false;
	}
	if(document.form1.roomtype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.roomtype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.roomtype.focus();
		return false;
	}
	if(document.form1.ceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����¥�㣡");
		document.form1.ceng.focus();
		return false;
	}
	if(document.form1.build.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.build.value=="��ѡ��")
	{
		alert("��ѡ��װ�޳̶ȣ�");
		document.form1.build.focus();
		return false;
	}
	if(document.form1.buildsam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.buildsam.focus();
		return false;
	}
	if(document.form1.usesam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����дʹ�������");
		document.form1.usesam.focus();
		return false;
	}
	if(document.form1.renttime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���ڣ�");
		document.form1.renttime.focus();
		return false;
	}
	if(document.form1.rentmoney.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���");
		document.form1.rentmoney.focus();
		return false;
	}
	if(document.form1.promoney.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�ⷿѺ��");
		document.form1.promoney.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("���ݼ����д��������200�����ڣ�");
		document.form1.intro.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.widetel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���ţ�");
		document.form1.widetel.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���룡");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.handset.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�ֻ����룡");
		document.form1.handset.focus();
		return false;
	}
	if(document.form1.befortime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ч�ڣ�");
		document.form1.befortime.focus();
		return false;
	}
	if(document.form1.file_1.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_1.value.substring(form1.file_1.value.length-4,form1.file_1.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_1.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_1.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_1.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_2.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_2.value.substring(form1.file_2.value.length-4,form1.file_2.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_2.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_2.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_2.focus(); 
			return false; 
		} 
	}
	if(document.form1.file_3.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.file_3.value.substring(form1.file_3.value.length-4,form1.file_3.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.file_3.focus(); 
			return false; 
		} 
		/**
		var filestr = document.form1.file_1.value;
	 	var fso,f; 
	 	fso=new ActiveXObject("Scripting.FileSystemObject");  
	 	f=fso.GetFile(filestr); 
	 	if(f.size>500*1024)
	 	{
	 		alert("�Բ���ͼƬ����500K���ϣ�����ü������ϴ���"); 
	 		form1.file_1.focus(); 
	 		return false;
	 	}
	 	*/
	 	if(document.form1.description_3.value.replace(/\s+$|^\s+/g,"").length<=0)
	 	{
			alert("����дͼƬ˵��!"); 
			form1.description_3.focus(); 
			return false; 
		} 
	}
}
//��֤���ⷿ����Ϣ����
function checkrentinhouse()
{
	if(document.form1.place.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.place.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ڷ�λ��");
		document.form1.place.focus();
		return false;
	}
	if(document.form1.wide.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��������С����ضΣ�");
		document.form1.wide.focus();
		return false;
	}
	if(document.form1.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������ϸ��ַ��");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.housetype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.housetype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.housetype.focus();
		return false;
	}
	if(document.form1.roomtype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.roomtype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.roomtype.focus();
		return false;
	}
	if(document.form1.sceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����¥�㣡");
		document.form1.sceng.focus();
		return false;
	}
	if(document.form1.eceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����¥�㣡");
		document.form1.eceng.focus();
		return false;
	}
	if(document.form1.ssam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.ssam.focus();
		return false;
	}
	if(document.form1.esam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.esam.focus();
		return false;
	}
	if(document.form1.build.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.build.value=="��ѡ��")
	{
		alert("��ѡ��װ�޳̶ȣ�");
		document.form1.build.focus();
		return false;
	}
	if(document.form1.renttime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���ڣ�");
		document.form1.renttime.focus();
		return false;
	}
	if(document.form1.rentmoney.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���");
		document.form1.rentmoney.focus();
		return false;
	}
	if(document.form1.livetime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("��ѡ����סʱ�䣡");
		return false;
	}
	if(document.form1.otherneed.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("����Ҫ����д��������200�����ڣ�");
		document.form1.otherneed.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.widetel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���ţ�");
		document.form1.widetel.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���룡");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.handset.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�ֻ����룡");
		document.form1.handset.focus();
		return false;
	}
}
//��֤�󹺷�����Ϣ����
function checkbuyhouse()
{
	if(document.form1.place.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.place.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ڷ�λ��");
		document.form1.place.focus();
		return false;
	}
	if(document.form1.wide.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��������С����ضΣ�");
		document.form1.wide.focus();
		return false;
	}
	if(document.form1.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������ϸ��ַ��");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.housetype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.housetype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.housetype.focus();
		return false;
	}
	if(document.form1.roomtype.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.roomtype.value=="��ѡ��")
	{
		alert("��ѡ�񷿲����ͣ�");
		document.form1.roomtype.focus();
		return false;
	}
	if(document.form1.sceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����¥�㣡");
		document.form1.sceng.focus();
		return false;
	}
	if(document.form1.eceng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����¥�㣡");
		document.form1.eceng.focus();
		return false;
	}
	if(document.form1.ssam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.ssam.focus();
		return false;
	}
	if(document.form1.esam.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.esam.focus();
		return false;
	}
	if(document.form1.build.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.build.value=="��ѡ��")
	{
		alert("��ѡ��װ�޳̶ȣ�");
		document.form1.build.focus();
		return false;
	}
	if(document.form1.price.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���׼۸�");
		document.form1.price.focus();
		return false;
	}
	if(document.form1.age.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���������");
		document.form1.age.focus();
		return false;
	}
	if(document.form1.otherneed.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("����Ҫ����д��������200�����ڣ�");
		document.form1.otherneed.focus();
		return false;
	}
	if(document.form1.linkman.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��ϵ�ˣ�");
		document.form1.linkman.focus();
		return false;
	}
	if(document.form1.widetel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���ţ�");
		document.form1.widetel.focus();
		return false;
	}
	if(document.form1.tel.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�绰���룡");
		document.form1.tel.focus();
		return false;
	}
	if(document.form1.handset.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�ֻ����룡");
		document.form1.handset.focus();
		return false;
	}
	if(document.form1.befortime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��Ч���ޣ�");
		document.form1.befortime.focus();
		return false;
	}
}		
//
function ResumeError()
 {
        return true;
    }
window.onerror = ResumeError;

//
/*
if (window.Event) 
document.captureEvents(Event.MOUSEUP); 
function nocontextmenu() 
{
event.cancelBubble = true
event.returnValue = false;
return false;
}
function norightclick(e) 
{
if (window.Event) 
{
if (e.which == 2 || e.which == 3)
return false;
}
else
if (event.button == 2 || event.button == 3)
{
event.cancelBubble = true
event.returnValue = false;
return false;
}
}
document.oncontextmenu = nocontextmenu; // for IE5+
document.onmousedown = norightclick; // for all others
*/
function OnclikeTable(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 7 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	form1.username.value = vlu[1];
	form1.username.readonly=true;
	//alert(vlu[3]);
	form1.isuse.value = vlu[3];
	form1.add.checked=false;
	form1.add.disabled=true;
	form1.update.checked=true;
	form1.update.disabled=false;
}
function OnclikeTableitem(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 2 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	
	form1.id.value = vlu[0];
	form1.itemname.value = vlu[1];
}

function OnclikeTableitemClass(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 2 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	
	form1.id.value = vlu[0];
	form1.classname.value = vlu[1];
}
 //
function changecheck()
{
	form1.add.checked=true;
	form1.update.checked=false;
}
function changecheck2()
{
	form1.add.checked=false;
	form1.update.checked=true;
} 

function is_zw(str)
{
	//exp=/[0-9a-zA-Z_.,#@!$%^&*()-+=|\?/<>]/g;
	//if(str.search(exp) != -1)
	//{
	//	return false;
	//}
	//return true;
}
//
function CheckBadChar(Obj,AlertStr)
{
	exp=/[,]/g;
	if(Obj.value.search(exp) != -1)
	{   alert(AlertStr);
	    Obj.value="";
		Obj.focus();
		return false;
	}
	return true;
}
//
function IsExt(FileName, AllowExt){
		var sTemp;
		var s=AllowExt.toUpperCase().split("|");
		for (var i=0;i<s.length ;i++ ){
			sTemp=FileName.substr(FileName.length-s[i].length-1);
			sTemp=sTemp.toUpperCase();
			s[i]="."+s[i];
			if (s[i]==sTemp){
				return true;
				break;
			}
		}
		return false;
}
//
function is_number(str)
{
	exp=/[^0-9()-]/g;
	if(str.search(exp) != -1)
	{
		return false;
	}
	return true;
}
//
function CheckNumber(Obj,DescriptionStr)
{
	if (Obj.value!='' && (isNaN(Obj.value) || Obj.value<0))
	{
		alert(DescriptionStr);
		Obj.value="";
		Obj.focus();
		return false;
	}
	return true;
}
//
function is_email(str)
{ if((str.indexOf("@")==-1)||(str.indexOf(".")==-1)){
	
	return false;
	}
	return true;
}
function CheckAll(form)
{
				  for (var i=0;i<form.elements.length;i++)
				  {
					var e = form.elements[i];
					if (e.Name != 'chkAll'&&e.disabled==false)
					   e.checked = form.chkAll.checked;
					}
 } 
function OpenWindow(Url,Width,Height,WindowObj)
{
	var ReturnStr=showModalDialog(Url,WindowObj,'dialogWidth:'+Width+'pt;dialogHeight:'+Height+'pt;status:no;help:no;scroll:no;status:0;help:0;scroll:0;');
	return ReturnStr;
}
function WinPop(url, width, height)
{
  window.showModelessDialog(url,"",'dialogWidth=' + width + 'px; dialogHeight=' + height + 'px; resizable=no; help=no; scroll=no; status=no;resizable=0; help=0; scroll=0; status=0;'); 
}
function OpenThenSetValue(Url,Width,Height,WindowObj,SetObj)
{
	var ReturnStr=showModalDialog(Url,WindowObj,'dialogWidth:'+Width+'pt;dialogHeight:'+Height+'pt;status:no;help:no;scroll:no;status:0;help:0;scroll:0;');
	if (ReturnStr!='') SetObj.value=ReturnStr;
	return ReturnStr;
}
function OpeneditorWindow(Url,WindowName,Width,Height)
{
	window.open(Url,WindowName,'toolbar=0,location=0,maximize=1,directories=0,status=1,menubar=0,scrollbars=0,resizable=1,top=50,left=50,width='+Width+',height='+Height);
}

function CheckEnglishStr(Obj,DescriptionStr)
{
	var TempStr=Obj.value,i=0,ErrorStr='',CharAscii;
	if (TempStr!='')
	{
		for (i=0;i<TempStr.length;i++)
		{
			CharAscii=TempStr.charCodeAt(i);
			if (CharAscii>=255||CharAscii<=31)
			{
				ErrorStr=ErrorStr+TempStr.charAt(i);
			}
			else
			{
				if (!CheckErrorStr(CharAscii))
				{
					ErrorStr=ErrorStr+TempStr.charAt(i);
				}
			}
		}
		if (ErrorStr!='')
		{
			alert("\n\n"+DescriptionStr+''+ErrorStr);
			Obj.focus();
			return false;
		}
		if (!(((TempStr.charCodeAt(0)>=48)&&(TempStr.charCodeAt(0)<=57))||((TempStr.charCodeAt(0)>=65)&&(TempStr.charCodeAt(0)<=90))||((TempStr.charCodeAt(0)>=97)&&(TempStr.charCodeAt(0)<=122))))
		{
			alert(DescriptionStr);
			Obj.focus();
			return false;
		}
	}
	return true;
}
function CheckErrorStr(CharAsciiCode)
{
	var TempArray=new Array(34,47,92,42,58,60,62,63,124);
	for (var i=0;i<TempArray.length;i++)
	{
		if (CharAsciiCode==TempArray[i]) return false;
	}
	return true;
}
//
function SelectObjItem(Obj,OpStr,ButtonSymbol,MainUrl)
{   if (OpStr!='')
    {window.parent.parent.frames['BottomFrame'].location.href='../help.jsp'}
	if(MainUrl!='')
	{window.parent.parent.frames['MainFrame'].location.href=MainUrl;
	}
	if (Obj!='')
	 {
	   for (var i=0;i<document.all.length;i++)
	   {
		if (document.all(i).className=='FolderSelectItem') document.all(i).className='FolderItem';
	    }
	   Obj.className='FolderSelectItem';
	}
}
//
function SelectObjItem1(Obj,OpStr,ButtonSymbol,MainUrl)
{   if (OpStr!='')
    {window.parent.parent.frames['BottomFrame'].location.href='help.jsp'}
	if(MainUrl!='')
	{window.parent.parent.frames['MainFrame'].location.href=MainUrl;
	}
	if (Obj!='')
	 {
	   for (var i=0;i<document.all.length;i++)
	   {
		if (document.all(i).className=='FolderSelectItem') document.all(i).className='FolderItem';
	    }
	   Obj.className='FolderSelectItem';
	}
}
function FolderClick(Obj,el)
{   	var i=0;
  for (var i=0;i<document.all.length;i++)
	   {
		if (document.all(i).className=='FolderSelected') document.all(i).className='';
	    }
	         Obj.className='FolderSelected';
	  
              for (i=0;i<DocElementArr.length;i++)
			{
				if (el==DocElementArr[i].Obj)
				{
					if (DocElementArr[i].Selected==false)
					{
						DocElementArr[i].Obj.className='FolderSelectItem';
						DocElementArr[i].Selected=true;
					}
					else
					{
						DocElementArr[i].Obj.className='FolderItem';
						DocElementArr[i].Selected=false;
					}
				}
			}
}
function InsertKeyWords(obj,KeyWords)
{
	if (KeyWords!='')
	{
		if (obj.value.search(KeyWords)==-1)
		{
			if (obj.value=='') obj.value=KeyWords;
			else obj.value=obj.value+'|'+KeyWords;
			
		}
	}
	if (KeyWords == 'Clean')
	{
		obj.value = '';
	}
	return;
}
function Getcolor(img_val,Url,input_val){
	var arr = showModalDialog(Url, "", "dialogWidth:18.5em; dialogHeight:17.5em; status:0; help:0");
	if (arr != null){
		document.getElementById(input_val).value = arr;
		img_val.style.backgroundColor = arr;
		}
}
//
function SendFrameInfo(MainUrl,LeftUrl,ControlUrl)
{
	location.href=MainUrl;
    parent.frames['LeftFrame'].LeftInfoFrame.location.href=LeftUrl;
	 parent.frames['BottomFrame'].location.href=ControlUrl;
}