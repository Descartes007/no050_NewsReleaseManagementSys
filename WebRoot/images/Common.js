//������Ϣ����
function checkreport()
{
	if(document.form1.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����ҳ���ַ��");
		document.form1.address.focus();
		return false;
	}
	if(document.form1.resouce.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����ԭ��");
		document.form1.resouce.focus();
		return false;
	}
	if(document.form1.resouce.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("������������200�������ڣ�");
		document.form1.resouce.focus();
		return false;
	}
	form1.method.value="add";
	form1.submit();
}
//������������
function checklink()
{
	if(document.form1.linkname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д�������ƣ�");
		document.form1.linkname.focus();
		return false;
	}
	if(document.form1.url.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���ӵ�ַ��");
		document.form1.url.focus();
		return false;
	}
	if(document.form1.logo.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����дlogo��ַ��");
		document.form1.logo.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д����������");
		document.form1.intro.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("����������������200�������ڣ�");
		document.form1.intro.focus();
		return false;
	}
	form1.method.value="addlink";
	form1.submit();
}
//��֤���԰�����
function checkGUEST()
{
	if(document.form1.content.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�������������ݣ�");
		document.form1.content.focus();
		return false;
	}
	if(document.form1.content.value.replace(/\s+$|^\s+/g,"").length>200)
	{
		alert("�������ݲ��ܳ���200���֣�");
		document.form1.content.focus();
		return false;
	}
}

//����ע����ĺϷ��� reg2.jsp
function checkREG() {
	if (document.regbb.username.value.replace(/\s+$|^\s+/g,"").length<=0) {
		alert("\�����������û�����");
		document.regbb.username.focus();
		return false;
	}
	if(document.regbb.username.value.replace(/\s+$|^\s+/g,"").length<4||document.regbb.username.value.replace(/\s+$|^\s+/g,"").length>10) {
		alert("\�û���������4-10λ֮�䣡");
		document.regbb.username.focus();
		return false;
	} 
	if (document.regbb.password.value.replace(/\s+$|^\s+/g,"").length<=0) {
		alert("\�������������룡");
		document.regbb.password.focus();
		return false;
	}
	if(document.regbb.password.value.replace(/\s+$|^\s+/g,"").length<6||document.regbb.password.value.replace(/\s+$|^\s+/g,"").length>16) {
		alert("\���볤����6-16λ֮�䣡");
		document.regbb.password.focus();
		return false;
	} 
	if (document.regbb.reg_pwd2.value == "") {
		alert("\���ٴ������������룡");
		document.regbb.reg_pwd2.focus();
		return false;
	}
	if (document.regbb.password.value != document.regbb.reg_pwd2.value) {
		alert("\��������������벻ͬ��");
		document.regbb.reg_pwd2.focus();
		return false;
	}
	regbb.method.value="reg2";
    regbb.submit();
}
function sameREGcheck()
{
	if (document.regbb.username.value.replace(/\s+$|^\s+/g,"").length<=0) {
		alert("\�����������û�����");
		document.regbb.username.focus();
		return false;
	}
	else if(document.regbb.username.value.replace(/\s+$|^\s+/g,"").length<4||document.regbb.username.value.replace(/\s+$|^\s+/g,"").length>10) {
		alert("\�û���������4-10λ֮�䣡");
		document.regbb.username.focus();
		return false;
	} 
	regbb.method.value="checksame";
	regbb.submit();
}

//���˻�Աע������������֤
function checkpersonreg()
{
	if (document.regform.realname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д������ʵ������"); 
		document.regform.realname.focus();
		return false;
    }
    if (document.regform.sheng.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\��ѡ��ʡ��"); 
		document.regform.sheng.focus();
		return false;
    }
    if (document.regform.city.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\��ѡ�����ڳ��У�"); 
		document.regform.city.focus();
		return false;
    }
	if (document.regform.telphone.value.replace(/\s+$|^\s+/g,"").length<7)
	{
		alert("\����ȷ��д������ϵ�绰����������λ���ϣ�ֻ��Ϊ���֣�"); 
		document.regform.telphone.focus();
		return false;
    }
	if (document.regform.email.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д�������䣡"); 
		document.regform.email.focus();
		return false;
     }
	 if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(document.regform.email.value)) 
    {
        alert("�������ʽ��ȷ�� e-mail ��ַ��");
        document.regform.email.focus();
        return false;         
    }
	if (document.regform.question.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д������ʾ���⣡"); 
		document.regform.question.focus();
		return false;
     }
	 if (document.regform.answer.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д���뱣���𰸣�"); 
		document.regform.answer.focus();
		return false;
     }
	 if (document.regform.question.value==document.regform.answer.value)
	{
		alert("\���뱣����ʾ����ʹ𰸲���һ����"); 
		document.regform.answer.focus();
		return false;
     }
     regform.submit();
}	
//��֤��ҵ��Աע������
function checkcoreg()
{
	if (document.reg.coname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д��˾���ƣ�"); 
		document.reg.coname.focus();
		return false;
     }
	 if (document.reg.address.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д��˾��ַ��"); 
		document.reg.address.focus();
		return false;
     }
	 if (document.reg.postnum.value.replace(/\s+$|^\s+/g,"").length>0&&document.reg.postnum.value.replace(/\s+$|^\s+/g,"").length!=6)
	{
		alert("\��������Ϊ��λ���֣�"); 
		document.reg.postnum.focus();
		return false;
     }
	if (document.reg.telphone.value.replace(/\s+$|^\s+/g,"").length<7)
	{
		alert("\����ȷ��д������ϵ�绰����������λ���ϣ�ֻ��Ϊ���֣�"); 
		document.reg.telphone.focus();
		return false;
    }
	if (document.reg.email.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д�������䣡"); 
		document.reg.email.focus();
		return false;
     }
	 if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(document.reg.email.value)) 
    {
        alert("�������ʽ��ȷ�� e-mail ��ַ��");
        document.reg.email.focus();
        return false;         
    }
	if (document.reg.question.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д������ʾ���⣡"); 
		document.reg.question.focus();
		return false;
     }
	 if (document.reg.answer.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("\����д���뱣���𰸣�"); 
		document.reg.answer.focus();
		return false;
     }
	 if (document.reg.question.value==document.reg.answer.value)
	{
		alert("\���뱣����ʾ����ʹ𰸲���һ����"); 
		document.reg.answer.focus();
		return false;
     }
	 if (document.reg.intro.value.replace(/\s+$|^\s+/g,"").length>500)
	{
		alert("\��˾������500�����ڣ�"); 
		document.reg.intro.focus();
		return false;
     }
     reg.submit();
}
