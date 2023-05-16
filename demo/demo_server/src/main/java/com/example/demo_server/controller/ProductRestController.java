package com.example.demo_server.controller;
import com.example.demo_server.DTO.ProductDTO;
import com.example.demo_server.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductRestController {
    @Autowired
    private IProductService productervice;
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Page<ProductDTO> getAllproduct (@PageableDefault(size = 3)Pageable pageable,
                                         @RequestParam(required = false, defaultValue = "") String name,
                                         @RequestParam(required = false, defaultValue = "") String bookTypeId) {

        Page<ProductDTO> bookPage = productervice.findAll(name, bookTypeId, pageable);
        for (ProductDTO book : bookPage.getContent()) {
            SimpleDateFormat initialDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat newDateFormat = new SimpleDateFormat("dd/MM/yyyy");
            String importedDate = book.getImportedDate();
            String importedDateInNewFormat = "";
            try {
                Date date = initialDateFormat.parse(importedDate);
                importedDateInNewFormat = newDateFormat.format(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            book.setImportedDate(importedDateInNewFormat);
        }

        return bookPage;
    }

    @PostMapping("")
    public ResponseEntity<?> saveBook (@Validated @RequestBody ProductDTO bookDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            productervice.save(bookDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,  HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable Integer id) {
        productervice.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO getBookDetail(@PathVariable Integer id) {
        return productervice.findById(id);
    }

    @PutMapping("")
    public ResponseEntity<?> updateBook (@Validated @RequestBody ProductDTO bookDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            productervice.update(bookDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,  HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
