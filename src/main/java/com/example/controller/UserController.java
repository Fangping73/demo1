package com.example.controller;

import com.example.entity.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    //查询所有user数据
    @RequestMapping("/findByAll")
    public String index(Model model) {
        List<User> list = userService.findByAll();
        model.addAttribute("users", list);
        return "userList";
    }

    //默认访问list页面
    @RequestMapping("/")
    public String list(Model model) {
        List<User> users = userService.findByAll();
        model.addAttribute("users", users);
        return "userList";
    }

    //保存user数据
    @RequestMapping("/toAdd")
    public String toAdd() {
        return "userAdd";
    }

    @RequestMapping("/add")
    public String add(User user) {
        userService.saveUser(user);
        return "redirect:/";
    }

    //修改user数据
    @RequestMapping("/toEdit")
    public String toEdit(Model model, Integer id) {
        User user = userService.findUserById(id);
        model.addAttribute("user", user);
        return "userEdit";
    }

    @RequestMapping("/edit")
    //@ResponseBody
    public String edit(User user) {
        userService.updateUser(user);
        return "redirect:/";
    }

    //删除user数据
    @RequestMapping("/delete")
    public String delete(Integer id) {
        userService.deleteUser(id);
        return "redirect:/";
    }
    @RequestMapping("/register")
    public String register(){
        return "register";
    }

}
