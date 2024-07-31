package com.action;

/**
 * ���Ź���
 * 
 */
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bean.ComBean;
import com.bean.NewsBean;
import com.bean.SystemBean;
import com.util.Constant;
import com.util.Filter;


public class NewsServlet extends HttpServlet {

	private ServletConfig config;
	/**
	 * Constructor of the object.
	 */
	public NewsServlet() {
		super();
	}

	final public void init(ServletConfig config) throws ServletException
    {
        this.config = config;  
    }

    final public ServletConfig getServletConfig()
    {
        return config;
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

		request.setCharacterEncoding(Constant.CHARACTERENCODING);
		response.setContentType(Constant.CONTENTTYPE);
		String sysdir = new SystemBean().getDir();
		HttpSession session = request.getSession();
		try{
			String username2 = (String)session.getAttribute("user");
			 
				 String method = request.getParameter("method").trim();
				 NewsBean newsBean = new NewsBean();
				  
					// System.out.println("aaaaaaaaaaaaaaaaa");
		             
		            if(method.equals("ADDNEWS")){//��������
		            	String title = Filter.escapeHTMLTags(request.getParameter("title").trim());
		            	String fenlei = request.getParameter("fenlei");
						String content = request.getParameter("content1");
						String gjz = request.getParameter("gjz");
						if(content.length()>8000){
						request.setAttribute("message", "�Բ������ݲ��ܳ���8000���ַ���");
						request.setAttribute("method", method);
						request.getRequestDispatcher(sysdir+"/news/edit.jsp").forward(request, response);
						}
						else{
							int flag = newsBean.addNews(title,fenlei,content, username2,gjz);
								if(flag == Constant.SUCCESS){
									request.setAttribute("message", "���ӳɹ���");
									request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
								}
								else{
									request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
									request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
								}
		                    }
		                    				
		            }
		            else if(method.equals("editnews")){//�޸�����
		            	String id = Filter.escapeHTMLTags(request.getParameter("id").trim());
		            	String title = Filter.escapeHTMLTags(request.getParameter("title").trim());
		            	String fenlei = request.getParameter("fenlei");
						String content = request.getParameter("content1");
						String gjz = request.getParameter("gjz");
							int flag = newsBean.updateNews(Integer.parseInt(id), title,fenlei, content, username2,gjz);
							if(flag == Constant.SUCCESS){
								request.setAttribute("message", "�޸ĳɹ���");
								request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
							}
							else{
								request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
								request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
							}
	                    
		            }
		            else if(method.equals("DELNEWS")){//ɾ������  
						String check[] = request.getParameterValues("checkit");
	        			if(check == null){
							request.setAttribute("message", "��ѡ��Ҫɾ���ļ�¼��");
							request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
						}
						else{
							int id2[]= new int[check.length];
							for(int i = 0;i<check.length;i++){
								int s = Integer.parseInt(check[i]);				
								id2[i] = s;
							}
							int flag = new NewsBean().delNews(id2); 
							if(flag == Constant.SUCCESS){
								request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
							}
							else{
								request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
								request.getRequestDispatcher(sysdir+"/news/index.jsp").forward(request, response);
							}
						}
					}
		            else if(method.equals("addFenlei")){//���ӷ���
		            	String title=request.getParameter("title");
		            	int flag = newsBean.addFenlei(title);
						if(flag == Constant.SUCCESS){
							request.setAttribute("message", "�����ɹ���");
							request.getRequestDispatcher(sysdir+"/fenlei/index.jsp").forward(request, response);
						}
						else{
							request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
							request.getRequestDispatcher(sysdir+"/fenlei/index.jsp").forward(request, response);
						}
		            }
		            else if(method.equals("delFenlei")){//ɾ����
		            	String id=request.getParameter("id");
		            	int flag = newsBean.delFenlei(id);
						if(flag == Constant.SUCCESS){
							request.setAttribute("message", "�����ɹ���");
							request.getRequestDispatcher(sysdir+"/fenlei/index.jsp").forward(request, response);
						}
						else{
							request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
							request.getRequestDispatcher(sysdir+"/fenlei/index.jsp").forward(request, response);
						}
		            }
		            
		            
		            
		            
		            
		            
		            else if(method.equals("mdelPl")){//ɾ����
		            	String id=request.getParameter("id");
		            	int flag = newsBean.delMethod("delete from pl where id='"+id+"'");
						if(flag == Constant.SUCCESS){
							request.setAttribute("message", "�����ɹ���");
							request.getRequestDispatcher(sysdir+"/news/pl.jsp").forward(request, response);
						}
						else{
							request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
							request.getRequestDispatcher(sysdir+"/news/pl.jsp").forward(request, response);
						}
		            }
		            
		            
		            
		            //����
		            else if(method.equals("pl")){
		            	ComBean cb=new ComBean();
		            	String nid=request.getParameter("nid");
		            	String content=request.getParameter("content");
		            	String member = (String)session.getAttribute("member");
		            	 if(member==null){
		            		 request.setAttribute("message", "���ȵ�¼��");
								request.setAttribute("id", nid);
								request.getRequestDispatcher("newsinfo.jsp").forward(request, response);
		            	 }
		            	 else{
		            		 	int flag = newsBean.delMethod("insert into pl(nid,content,member,addtime) values('"+nid+"','"+content+"','"+member+"','"+new java.util.Date().toLocaleString()+"')");
								if(flag == Constant.SUCCESS){
									request.setAttribute("message", "�����ɹ���");
									request.setAttribute("id", nid);
									request.getRequestDispatcher("newsinfo.jsp").forward(request, response);
								}
								else{
									request.setAttribute("message", "����ʧ�ܣ�");
									request.setAttribute("id", nid);
									request.getRequestDispatcher("newsinfo.jsp").forward(request, response);
								}
		            	 }
		            	 
		            }
		            
		            else{
		            	request.getRequestDispatcher("error.jsp").forward(request, response);
		            }
		      
			 
		}catch(Exception e){
			e.printStackTrace();
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
