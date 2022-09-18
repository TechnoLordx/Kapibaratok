Rendszerterv

# A rendszer célja

A rendszer célja egy olyan viccportál (weboldal) létrehozása mely kifejezetten a Debreceni Egyetem Informatikai Kar tanulói és hallgatói számára készül. A hétköznapi egyetemi élet nem egyszerű és sok sokszor rengeteg stresszt jelent egy diák és oktató életében egyaránt. Ezt a stresszt próbáljuk majd csökkenteni a humor segítségével egy viccportálon keresztül. A viccek tematikájukat tekintve informatika, matematika és az egyetem lennének a főtéma.
Egy könnyen kezelhető főoldal és témaválasztó oldal az alapja, ezekről lehet tovább lépni a viccekhez melyek külön lapon szerepelnek. A viccportál felépítése könnyen átláható, oda-vissza lépés a különböző lapok között. Menüsor készítése a főoldalhoz, illetve a többi laphoz, oldalak közötti navigáció megkönnyítése és lehetővé tevése érdekében. A főoldal egy köszöntő oldal mely tovább vezet a témaválasztó oldalhoz. A témaválasztó oldal hasonlóan épül fel, viszont a tartalmi részén a témák külön megjelenítése és ismertetése van. A témaválasztó oldal segít felhasználónak és informálja őt, hogy merre tud tovább lépni. A témaválasztó oldalról olyan oldalra kerülünk melyek magukat a viccet tartalmazzák. Fontos hogy a weboldal telefonon, számítógépen is egyaránt elérhető legyen és az összes platformon megjelenítés jól nézzen ki és jól használható legyen.

<img src = "diagram.png" alt = "Weboldal felépítése" style ="height: 250px; width:250px"/>

# A rendszer nem célja

1. Túl zsúfolt kezelő felelület.
2. A viccek tartalmilag ne legyenek bántóak, támadó jellegűek.
3. Összezavaró menürendszer. 
4. Bejelentkezési rendszer.
5. Reklám megjelenítések.
6. Elérhetőség.


# Projekt terv

A projekten dolgozók listája és feladatai:

1. Bezerédi Erik - Back-end programozó
2. Vass Bálint - Front-end programozó
3. Ilés Zoltán - Front-end programozó
4. Kocsis Olivér - Front-end programozó

Bezérdi Erik felelős a weboldal mögött futó programok megírása JavaScript nyelven.
Vass Bálint felelős a weboldal stílusáért CSS fájlok megírásával.
Illés Zoltán felelős a weboldal felépítéséért HTML fájlok megírásával.
Kocsis Olivér felelős a weboldal stílusáért CSS fájlok megírásával.

# Ütemterv

Követelmény specifikáció létrehozásának határideje: 2022.09.12
Funkcionális specifikáció létrehozásának határideje: 2022.09.12
Rendszterv létrehozásának határideje: 2022.09.19
Projekt tesztelésének határideje:2022.09.26
A weboldal elkészülésének határideje: 2022.10.03

# Mérföldkövek

 1. Rendszerterv megalkotása
 2. A főoldal létrehozása
 3. Témaválasztó létrehozása
 4. Vicceket tartalmazó oldalak létrhozása
 5. Menüsor kialakítása
 6. Oldalak összekapcsolása
 7. Interaktív gombok, szövegek hozzáadása
 8. Oldal stílusok megalkotása
 9. Html formázás
10. Tesztelés
11. Kiadás

## Üzleti folyamatok
#
### Üzleti szereplők
+ A weboldal használói főleg az egytem hallgatói lesznek, de hozzáférése mindenkinek lesz aki rendelkezik internet hozzáféréssel. 
+ Tehát az egyetemen kivüli személyek is használhatják fontos, hogy könnyen értelmezhető és kezelhető legyen.

### Üzleti folyamatok
+ A folyamat, a használat nagyon egyszerű.
+ A kezdőoldal tetején találhatóak a gombok amelyekkel lehet kiválasztani a vicc kategóriákat, illetve egy vissza gomba az oldalakon.
+ 9 vicc kategória közűl lehet majd választani pl : Ik -s viccek, matekos ...
+ A ketgória kiválasztása után betölti a vicceket és az oldalon lehet olvasni ezeket, továbbá megjelenik egy vissza gomb ami vissza vissz a főoldalra.
+ A visszagombra kattintva az eddig betoltött viccek értelem szerűen eltünnek és a főoldal jelenik meg.

## Absztrakt domain modell

A rendszerünk egy gépből áll, mivel a weboldal csak az adott gépen fut, használ hálózati kapcsolatot, kommunikál lokál szerverrel (xampp).

## Architektúrális terv

Ismételten a program helyileg fut, egyszerre összesen csak egy felhasználó tudja használni.
 
A felhasználó az oldalt nem tudja módosítani azaz viccet hozzáadni, viszont a dokumentumok nincsenek titkosítva.

## Adatbázis terv

Az adattárolás egy adatbázis segítségével valósul meg. Ahhol a ketegóriák szerint tároljuk a vicceket.

pl: |Programozos| Matek | ...

és ezen oszlopok tartalmazzák majd a témának megfelelő vicceket. 
Minden kategóriához 10 - 20 vicc tartzik.

## Követelmények

+ Könnyen kezelhető felület.
+ Telefonról és gépről egyaránt jól kinéző.
+ Figyelemfelkeltő kinézet és effektusok használata.
+ Interaktív legyen.
+ Elérhetőség, hogy a felhasználók tudjanak ötletet megosztani a szerkesztőkkel.
+ Jól elkülönithetőek legyenek a vicc kategóriák.
+ Lehessen bővíteni a kategóriákat a program átadása után.

## Fizikai környezet



