package com.action;

/**
 * ��Աע�ᡢ�޸����ϵ�
 * @author Administrator
 *
 */


import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bean.MemberBean;
import com.bean.SystemBean;
import com.util.Constant;
import com.util.Filter;
import com.util.MD5;

public class MemberAction extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public MemberAction() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request,response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType(Constant.CONTENTTYPE);
		request.setCharacterEncoding(Constant.CHARACTERENCODING);
		HttpSession session = request.getSession();
		MemberBean memberBean = new MemberBean();
		String method = Filter.escapeHTMLTags(request.getParameter("method").trim());
		/*********************************************
		 * ��Աע��ͨ�ã�����û��� �޸����� reg2.jspҳ����ת��
		 *********************************************/
		if(method.equals("reg2")){//��Աע�� reg2.jsp
			String username = Filter.escapeHTMLTags(request.getParameter("username").trim());
			String password = Filter.escapeHTMLTags(request.getParameter("password").trim());
			String reg_type = Filter.escapeHTMLTags(request.getParameter("reg_type").trim());
			request.setAttribute("username", username);
			request.setAttribute("password", password);
			request.setAttribute("reg_type", reg_type);
			if(username.trim().equals("admin")){
				request.setAttribute("username", username);
				request.setAttribute("message", "�Ƿ����û�����������ѡ��");
				request.getRequestDispatcher("reg2.jsp").forward(request, response);
			}
			else{
				int flag = memberBean.checkRegName(username);
				if(flag == Constant.SUCCESS){
					if(reg_type.equals("person")){//����Ǹ��˻�Ա
						request.getRequestDispatcher("personreg.jsp").forward(request, response);
					}
					else if(reg_type.equals("co")){//�������ҵ��Ա
						request.getRequestDispatcher("coreg.jsp").forward(request, response);
					}
					else{
						request.getRequestDispatcher("index.jsp").forward(request, response);
					}
				}
				else if(flag == Constant.SAME_NAME){
					request.setAttribute("username", username);
					request.setAttribute("message", "�Բ��𣬸��û����Ѵ��ڣ�������ѡ��");
					request.getRequestDispatcher("reg2.jsp").forward(request, response);
				}
				else{
					request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
					request.getRequestDispatcher("reg2.jsp").forward(request, response);
				}
			}
			
			
		}
		else if(method.equals("checksame")){//���ע�����Ƿ����
			String username = Filter.escapeHTMLTags(request.getParameter("username").trim());
			if(username.trim().equals("admin")){
				request.setAttribute("username", username);
				request.setAttribute("message", "�Ƿ����û�����������ѡ��");
				request.getRequestDispatcher("reg2.jsp").forward(request, response);
			}
			else{
				int flag = memberBean.checkRegName(username);
				if(flag == Constant.SUCCESS){
					request.setAttribute("username", username);
					request.setAttribute("message", "��ϲ����������ֿ���ʹ�ã�");
					request.getRequestDispatcher("reg2.jsp").forward(request, response);
				}
				else if(flag == Constant.SAME_NAME){
					request.setAttribute("username", username);
					request.setAttribute("message", "�Բ��𣬸��û����Ѵ��ڣ�������ѡ��");
					request.getRequestDispatcher("reg2.jsp").forward(request, response);
				}
				else{
					request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
					request.getRequestDispatcher("reg2.jsp").forward(request, response);
				}
			}
		}
		else if(method.equals("Editpwd")){//��Ա�޸ĵ�½����
			String member=(String)session.getAttribute("member");
			String type=(String)session.getAttribute("type");
			if(member==null||type==null){
				response.sendRedirect("error.jsp");
			}
			else{
				String oldpwd = MD5.MD5(request.getParameter("oldpwd").trim());
				String newpwd = MD5.MD5(request.getParameter("newpwd").trim());
				int flag = memberBean.editPassword(member, oldpwd, newpwd);
				switch (flag){
					case Constant.SUCCESS:
						request.setAttribute("message", "�����޸ĳɹ���");
						request.getRequestDispatcher("member/info/editpwd.jsp").forward(request, response);
						break;
					case Constant.PASSWORD_ERROR:
						request.setAttribute("message", "ԭʼ���������ȷ��Ȩ�ޣ�");
						request.getRequestDispatcher("member/info/editpwd.jsp").forward(request, response);
						break;
					case Constant.SYSTEM_ERROR:
						request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
						request.getRequestDispatcher("member/info/editpwd.jsp").forward(request, response);
						break;
				}
			}
		}
		/*********************************************
		 * ���˻�Աע�ᡢ�޸����� 
		 *********************************************/
		else if(method.equals("PREG")){//���˻�Ա��ϸ����
			String username = Filter.escapeHTMLTags(request.getParameter("username").trim());
			String password = Filter.escapeHTMLTags(request.getParameter("password").trim());
			String type = "person";
			String realname = Filter.escapeHTMLTags(request.getParameter("realname").trim());
			String sex = Filter.escapeHTMLTags(request.getParameter("sex").trim());
			String sheng = Filter.escapeHTMLTags(request.getParameter("sheng").trim());
			String city = Filter.escapeHTMLTags(request.getParameter("city").trim());
			String bir = Filter.escapeHTMLTags(request.getParameter("bir").trim());
			String telphone = Filter.escapeHTMLTags(request.getParameter("telphone").trim());
			String email = Filter.escapeHTMLTags(request.getParameter("email").trim());
			String question = Filter.escapeHTMLTags(request.getParameter("question").trim());
			String answer = Filter.escapeHTMLTags(request.getParameter("answer").trim());
			String address = Filter.escapeHTMLTags(request.getParameter("address").trim());
			String lastip = request.getRemoteAddr();
			int off = 1;
			int flag = memberBean.personReg(username, password, type, realname, sex, bir,sheng,city, telphone, email, question, answer, lastip, off,address);
			if(flag == Constant.SUCCESS){
					List siteList = new SystemBean().getSiteInfo();
					String sitename = siteList.get(0).toString();
					request.setAttribute("message", "ע��ɹ�����ϲ����Ϊ"+sitename+"��ע���Ա��");
					request.getRequestDispatcher("login.jsp").forward(request, response);
				
			}
			else{
				request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
				request.getRequestDispatcher("personreg.jsp").forward(request, response);
			}
		}
		else if(method.equals("UPREGINFO")){//���˻�Ա�޸�����
			String member=(String)session.getAttribute("member");
			String type=(String)session.getAttribute("type");
			if(member==null||type==null){
				response.sendRedirect("error.jsp");
			}
			else{
				String realname = Filter.escapeHTMLTags(request.getParameter("realname").trim());
				String sex = Filter.escapeHTMLTags(request.getParameter("sex").trim());
				String sheng = Filter.escapeHTMLTags(request.getParameter("sheng").trim());
				String city = Filter.escapeHTMLTags(request.getParameter("city").trim());
				String bir = Filter.escapeHTMLTags(request.getParameter("bir").trim());
				String telphone = Filter.escapeHTMLTags(request.getParameter("telphone").trim());
				String email = Filter.escapeHTMLTags(request.getParameter("email").trim());
				String question = Filter.escapeHTMLTags(request.getParameter("question").trim());
				String answer = Filter.escapeHTMLTags(request.getParameter("answer").trim());
				String address = Filter.escapeHTMLTags(request.getParameter("address").trim());
				int flag = memberBean.uppersonReg(member, realname, sex, bir, sheng, city, telphone, email, question, answer,address);
				if(flag == Constant.SUCCESS){					
					request.setAttribute("message", "�����ɹ���");
					request.getRequestDispatcher("member/info/info.jsp").forward(request, response);
				}
				else{
					request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
					request.getRequestDispatcher("member/info/info.jsp").forward(request, response);
				}
			}
		}
		
		else if(method.equals("lostpwd")){
			String username=request.getParameter("username");
			String question=request.getParameter("question");
			String answer=request.getParameter("answer");
			String reg_type=request.getParameter("reg_type");
			String info=memberBean.returnPwd(username, question, answer, reg_type);
			if(info.trim().equals("error")){
				request.setAttribute("message", "��Ϣ����");
				request.getRequestDispatcher("login.jsp").forward(request, response);
			}
			else{
				request.setAttribute("message", "����������Ϊ"+info+"�����¼���޸ģ�");
				request.getRequestDispatcher("login.jsp").forward(request, response);
			}
		}
		else{
			request.getRequestDispatcher("index.jsp").forward(request, response);
		}
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
