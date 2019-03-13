package com.examen.examenapps.Model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class doctores {
    private String dr1 = "Marco Martinez";
    private String dr2 = "Andrea Linares";
    private String dr3 = "Elena Perez";
    private String dr4 = "Esteban Melendrez";
    private String dr5 = "Brandon Rivera";

    public void docInit(){
        List<String> dr = new ArrayList();
        dr.add(dr1);
        dr.add(dr2);
        dr.add(dr3);
        dr.add(dr4);
        dr.add(dr5);
    }

}
