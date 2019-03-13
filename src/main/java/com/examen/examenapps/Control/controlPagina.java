package com.examen.examenapps.Control;

import com.examen.examenapps.Model.cita;
import com.examen.examenapps.Model.doctores;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class controlPagina {

    @GetMapping(path="/inicio")
    public String estado (Model modelo) {
        doctores dr = new doctores();
        dr.docInit();



        modelo.addAttribute("cita", new cita());
        modelo.addAttribute("doc", dr);
        return "pagina2";
    }

    @PostMapping("/inicio")
        public String citaSubmit(@ModelAttribute cita Cita){
        System.out.println(Cita.getDr());
            return "pagina2";
        }



}
