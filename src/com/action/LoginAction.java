package com.action;

/**
 * ǰ̨��Ա��½ �˳�
 * 
 */

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bean.MemberBean;
import com.util.Constant;
import com.util.Filter;

public class LoginAction extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public LoginAction() {
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
		if(method.equals("HEADUSERLOGIN")){//��ҳͷ����Ա��½
			String reg_user = Filter.escapeHTMLTags(request.getParameter("reg_user").trim());
			String reg_pwd = Filter.escapeHTMLTags(request.getParameter("reg_pwd").trim());
			String reg_type = Filter.escapeHTMLTags(request.getParameter("reg_type").trim());
			String lastip = request.getRemoteAddr();
			int flag = memberBean.memberLogin(reg_user, reg_pwd, reg_type);
			if(flag == Constant.SUCCESS){//��½�ɹ�
				String info = memberBean.getLastTimeIP(reg_user);
				int flag2 = memberBean.upmemberLogin(reg_user, lastip);
				if(flag2 == Constant.SUCCESS){
					session.setAttribute("member", reg_user);
					session.setAttribute("type", reg_type);
					session.setAttribute("info", info);
					request.getRequestDispatcher("login1.jsp").forward(request, response);
				}
				else{
					session.setAttribute("member", reg_user);
					session.setAttribute("type", reg_type);
					session.setAttribute("info", info);
					session.setAttribute("message", "��½�ɹ�����½��Ϣ����ʧ�ܣ�");
					request.getRequestDispatcher("login1.jsp").forward(request, response);
				}
			}
			else if(flag == Constant.NAME_ERROR){//�û�������
				request.setAttribute("reg_user", reg_user);
				request.setAttribute("message", "���û��������ڻ����ѱ�����Ա���ᣡ");
				request.getRequestDispatcher("login1.jsp").forward(request, response);
			}
			else if(flag == Constant.PASSWORD_ERROR){//�������
				request.setAttribute("reg_user", reg_user);
				request.setAttribute("message", "�������");
				request.getRequestDispatcher("login1.jsp").forward(request, response);
			}
		}
		else if(method.equals("PAGEUSERLOGIN")){//��½ҳ���Ա��½
			String username = Filter.escapeHTMLTags(request.getParameter("username").trim());
			String password = Filter.escapeHTMLTags(request.getParameter("password").trim());
			String reg_type = Filter.escapeHTMLTags(request.getParameter("reg_type").trim());
			String lastip = request.getRemoteAddr();
			int flag = memberBean.memberLogin(username, password, reg_type);
			if(flag == Constant.SUCCESS){//��½�ɹ�
				String info = memberBean.getLastTimeIP(username);
				int flag2 = memberBean.upmemberLogin(username, lastip);
				if(flag2 == Constant.SUCCESS){
					session.setAttribute("member", username);
					session.setAttribute("type", reg_type);
					session.setAttribute("info", info);
					request.getRequestDispatcher("member/index.jsp").forward(request, response);
				}
				else{
					session.setAttribute("member", username);
					session.setAttribute("type", reg_type);
					session.setAttribute("info", info);
					session.setAttribute("message", "��½�ɹ�����½��Ϣ����ʧ�ܣ�");
					request.getRequestDispatcher("member/index.jsp").forward(request, response);
				}
			}
			else if(flag == Constant.NAME_ERROR){//�û�������
				request.setAttribute("reg_user", username);
				request.setAttribute("message", "���û��������ڣ�");
				request.getRequestDispatcher("login.jsp").forward(request, response);
			}
			else if(flag == Constant.PASSWORD_ERROR){//�������
				request.setAttribute("reg_user", username);
				request.setAttribute("message", "�������");
				request.getRequestDispatcher("login.jsp").forward(request, response);
			}
		}
		else if(method.equals("logout")){//��iframeҳ���˳���½
			session.removeAttribute("member");
			session.removeAttribute("type");
			request.getRequestDispatcher("login1.jsp").forward(request, response);
		}
		else if(method.equals("pagelogout")||method.equals("memberexit")){//����ҳ�˳���½
			session.removeAttribute("member");
			session.removeAttribute("type");
			request.getRequestDispatcher("index.jsp").forward(request, response);
		}
		else{
			request.getRequestDispatcher("error.jsp").forward(request, response);
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
