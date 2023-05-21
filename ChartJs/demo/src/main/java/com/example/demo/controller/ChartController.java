package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ChartController {

    @GetMapping("")
    public List<Integer> getChartData() {
        // Logic để lấy dữ liệu biểu đồ từ nguồn dữ liệu
        List<Integer> data = Arrays.asList(12, 19, 3, 5, 2, 3, 10);
        return data;
    }
}