package Servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String xValue = req.getParameter("x_value");
        String yValue = req.getParameter("y_value");

        resp.setHeader("Content-Type", "text/html; charset=UTF-8");
        if(xValue == null || yValue == null){
            req.getServletContext().getRequestDispatcher("/index.jsp").forward(req,resp);
        }
        else{
            req.getServletContext().getRequestDispatcher("/AreaCheckServlet").forward(req,resp);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
