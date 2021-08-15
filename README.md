klase Masina:
pavadinimas
greitis
kelias
gazas(kiek)
stabdis(kiek)
vaziuojam()
 
klases SportineMasina paveldeta nuo Masina
spoileris true (pakeltas) / false (nuleistas)
pakeiskSpoilerioPozicija()
gazas(kiek) - overridden: jei spoileris pakeltas gazuoja tiek pat, jei nuleistas gazuoja 2x
stabdis(kiek) - overridden: jei spoileris pakeltas stabdo 2x, jei nuleistas gazuoja tiek pat


 
lenktynes:
yra 8 masinos , 2 is ju sportines
 
kiekvienos iteracijos metu 
kiekviena masina pakeicia savo greiti (-5..+5) (random) jei tai sportine - su tikimybe 50% pakeicia spoilerio pozicija
kiekviena masina pavaziuoja (per tiek, koks yra jos greitis)
 
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
*) komentatorius - kas 100 km spausdinti lyderi
 
pabaigoj suruosiuoti turnyrine lentele pagal nuvaziuota kelia (mazejimo tvarka)
atspausdinti turnyrine lentele
 
instanceof
 
kaip iskviesti super metoda