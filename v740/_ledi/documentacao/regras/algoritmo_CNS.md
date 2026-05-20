---
layout: doc
title: Validar CNS
id: algoritmo_CNS
parent: regras
order: 1
---

O CNS deve ser validado conforme alguma das rotinas abaixo:

### 1. Rotina de validação de Números que iniciam com **1** ou **2**:

```java

    public boolean validaCns(String cns){
        if (cns.trim().length() != 15){
            return(false);
        }

        float soma;
        float resto, dv;
        String pis = new String("");
        String resultado = new String("");
        pis = cns.substring(0,11);

        soma = ((Integer.valueOf(pis.substring(0,1)).intValue()) * 15) +
               ((Integer.valueOf(pis.substring(1,2)).intValue()) * 14) +
               ((Integer.valueOf(pis.substring(2,3)).intValue()) * 13) +
               ((Integer.valueOf(pis.substring(3,4)).intValue()) * 12) +
               ((Integer.valueOf(pis.substring(4,5)).intValue()) * 11) +
               ((Integer.valueOf(pis.substring(5,6)).intValue()) * 10) +
               ((Integer.valueOf(pis.substring(6,7)).intValue()) * 9) +
               ((Integer.valueOf(pis.substring(7,8)).intValue()) * 8) +
               ((Integer.valueOf(pis.substring(8,9)).intValue()) * 7) +
               ((Integer.valueOf(pis.substring(9,10)).intValue()) * 6) +
               ((Integer.valueOf(pis.substring(10,11)).intValue()) * 5);

        resto = soma % 11;
        dv = 11 - resto;

        if (dv == 11){
            dv = 0;
        }

        if (dv == 10){
            soma = ((Integer.valueOf(pis.substring(0,1)).intValue()) * 15) +
                   ((Integer.valueOf(pis.substring(1,2)).intValue()) * 14) +
                   ((Integer.valueOf(pis.substring(2,3)).intValue()) * 13) +
                   ((Integer.valueOf(pis.substring(3,4)).intValue()) * 12) +
                   ((Integer.valueOf(pis.substring(4,5)).intValue()) * 11) +
                   ((Integer.valueOf(pis.substring(5,6)).intValue()) * 10) +
                   ((Integer.valueOf(pis.substring(6,7)).intValue()) * 9) +
                   ((Integer.valueOf(pis.substring(7,8)).intValue()) * 8) +
                   ((Integer.valueOf(pis.substring(8,9)).intValue()) * 7) +
                   ((Integer.valueOf(pis.substring(9,10)).intValue()) * 6) +
                   ((Integer.valueOf(pis.substring(10,11)).intValue()) * 5) + 2;

            resto = soma % 11;
            dv = 11 - resto;
            resultado = pis + "001" + String.valueOf((int)dv);
        }
        else{
            resultado = pis + "000" + String.valueOf((int)dv);
        }

        if (! cns.equals(resultado)){
            return(false);
        }
        else{
        return(true);
      }
    }
    
```

### 2. Rotina de validação de Números que iniciam com **5**, **7**, **8** ou **9**:

```java

    public boolean validaCnsProv(String cns){
        if (cns.trim().length() != 15){
            return(false);
        }

        float dv;
        float resto,soma;

        soma = ((Integer.valueOf(cns.substring(0,1)).intValue()) * 15) +
               ((Integer.valueOf(cns.substring(1,2)).intValue()) * 14) +
               ((Integer.valueOf(cns.substring(2,3)).intValue()) * 13) +
               ((Integer.valueOf(cns.substring(3,4)).intValue()) * 12) +
               ((Integer.valueOf(cns.substring(4,5)).intValue()) * 11) +
               ((Integer.valueOf(cns.substring(5,6)).intValue()) * 10) +
               ((Integer.valueOf(cns.substring(6,7)).intValue()) * 9) +
               ((Integer.valueOf(cns.substring(7,8)).intValue()) * 8) +
               ((Integer.valueOf(cns.substring(8,9)).intValue()) * 7) +
               ((Integer.valueOf(cns.substring(9,10)).intValue()) * 6) +
               ((Integer.valueOf(cns.substring(10,11)).intValue()) * 5) +
               ((Integer.valueOf(cns.substring(11,12)).intValue()) * 4) +
               ((Integer.valueOf(cns.substring(12,13)).intValue()) * 3) +
               ((Integer.valueOf(cns.substring(13,14)).intValue()) * 2) +
               ((Integer.valueOf(cns.substring(14,15)).intValue()) * 1);

        resto = soma % 11;

        if (resto != 0){
            return(false);
        }
        else{
        return(true);
      }
    }

```