var tipuesearch = {"pages":[{"title":"O blogu","text":"Ten blog jest poświęcony szeroko rozumianym zagadnieniom związanym z budową stron i aplikacji internetowych a dokładniej ich frontową stroną - stąd większość treści, która się w tym miejscu się pojawi będzie związana z tą tematyką. Początkowo tematyka postów będzie obejmować zagadnienia z zakresu HTML,CSS,JS. Najprawdopodobniej rzadziej pojawiać się będą również posty poświęcone Pythonowi oraz Raspberry Pi (jeśli nie stworzę osobnego bloga poświęconemu temu tematowi.) Posty stanowić będą notatki, które zapisywać będę w trakcie włąsnej nauki, tak abym w przyszłości mógł do danego problemu powrócić i z taką myślą ten blog powstaje. Natomiast jeśli kiedyś komuś one również pomogą będzie to dla mnie wartością dodaną. Nazywam się Mikołaj Kostyrko i jestem autorem tego bloga. Z wykształcenia jestem archeologiem(specjalizacja: teledetekcja, XX wiek, metodologia), po skończeniu doktoratu oraz pracy na uczelni (Uniwersytet w Bambergu) postanowiłem zmienić zawód na web-developera. Obecnie kształcię się w kierunku tzw. frontendowca, choć faktycznie ścieżkę związaną z IT zacząłem od nauki Pythona. Jeśli jesteś zainteresowany tym czym do tej pory zajmowałem się w archeologii to polecam odwiedzenie tych trzech stron: Mój profil na portalu academia.edu Biografia Archeologii Blog - Archeogis Nazwa bloga jest wieloznaczna - nawiązuje do moich zainteresowań badawczych związanych z archeologią (I WŚ/II WŚ) jak i do moich własnych zmagań z poznawaniem nowych zagadnieniem związanych z Frontendem.","tags":"misc","url":"pages/o-blogu.html","loc":"pages/o-blogu.html"},{"title":"CSS - calc()","text":"Właściwość calc() jest funkcją której mogą być przypisane wartości: length , angles , time , number , integer . Jest szczególnie przydatna w obliczaniu wartości relatywnych - ponieważ: pozwala na wykonywanie matematycznych wyrażeń dodawania, odejmowania, mnożenia, dzielenia ( + , - , * , / )i wykorzystuje wynik jako wartość CSS, która przyjmuje wcześniej wspomniane wartości. Przykładowe zastosowanie 50% rodzica dzielone przez 3 el { width : calc ( 100 % - 50 % / 3 ); } 10% rodzica + dodatkowe 10px . el { margin-left : calc ( 10 % + 10 px ); } Źródło i polecane linki: https://tympanus.net/codrops/css_reference/calc/","tags":"css","url":"css-calc.html","loc":"css-calc.html"},{"title":"CSS:klasy","text":"Pseudo klasy pozwalają na wprowadzenie interaktywnego zachowania się strony przy pomocy CSS, przy pomocy tej deklaracji w zależności od zdefiniowanej sytuacji/stanu dany obiekt może przyjąć inny wygląd. Istotne jest to że deklaracja pseudoklasy poprzedzona jest dwukropkiem : Przykładowy schemat zastosowania selektor : pseudoklasa { właściwość : wartość ; } W przypadku linków istniejącą pseudoklasy a:visited - link, który został już użyty a:link - zmienia wygląd odsyłacza Pseudoklasy akcji :hover - obiekt nad którym znajduje się kursor myszy :focused - obiekt na którym jest focus (właściwość przypisana dla klawiatury) :active - obiekt link/używany Przykładowe zastosowanie button : hover { color : blue ; } Pseudoklasa dotycząca przycisku button:disabled - zablokowanie przycisku Pseudoklasa dotycząca checkboxa input[type=\"checkbox\"]:checked - zaznaczenie checkboxa Pseudoklasy strukturalne :first-child - wskazanie pierwszego dziecka :last-child - wskazanie ostatniego dziecka :nth-child() - wskazanie wybranego dziecka - w nawias wpisuje się liczbę przypisaną dla danego dziecka :nth-of-type() - n-te element określonego typu :nth-last-of-type() - n-ty element określonego typu licząc od ostatniego dziecka :nth-last-child() - każdy element który jest n-tym dzieckiem licząc od ostatniego dziecka :only-child - każdy element który jest jedynym dzieckiem swojego rodzica :first-of-type - pierwszy określonego typu :last-of-type - ostatni element określonego typu :only-of-type - jedyny element określonego typu / lub ten który nie posiada rodzeństwa określonego typu Przykładowe zastosowanie Jedyne dziecko p : only - child { color : red ; } p : nth - last - child ( 2 ) { color : red ; } /* ostatni element listy li */ li : nth - last - of - type ( 2 ) { background : red ; } Źródło i polecane linki: https://the-awwwesomes.gitbooks.io/html-css-step-by-step/content/pl/appendix/clean-code/index.html http://www.kurshtml.edu.pl/css/co_to_sa_pseudoklasy,pseudoklasy.html https://css-tricks.com/pseudo-class-selectors/ https://www.w3schools.com/css/css_pseudo_classes.asp https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes","tags":"css","url":"css-pseudo-klasy.html","loc":"css-pseudo-klasy.html"},{"title":"CSS::pseudo-elementy","text":"Pseudo elementy pozwalają na zadeklarowanie wyglądu odmiennego dla wybranego fragmentu tekstu lub wstawienie z pozycji CSS dodatkowego elementu. Pseudo elementy poprzedzone są podwójnym dwukropkiem :: np. ::first-line Wzór zastosowania (za developer.mozzilla.org ) selector :: pseudo-element { property : value ; } selektor :: pseudo-element { właściwość : wartość ; } Innymi słowy pseudoelement jest słowem kluczowym, które w połączeniu z wybranym selektorem pozwala na stylowanie wybranej części wybranego elementu. stylowanie pierszej litery lub linii wstawianie nowego elementu (np. obrazu) Przykładowe zastosowanie p :: first-line { color : blue ; text-transform : uppercase ; } ::first-line - pozwala na zadeklarowanie konkretnych cech dla pierwszej linii wybranego tekstu [na marginesie przykładowo do identacji tekstu nie trzeba stosować pseudo-elementów, wystarczy np text-indent ] Do pseudo-selektorów można dodać odpowiednio np. - font , color , word-spacing , background , t ext-decoration , line-height ::first-letter - zadeklarowanie konkretnej cechy dla pierwszej litery ::after - reprezentuje ostatnie dziecko wybranego elementu/ podstawową właściwością jest content w ramach, której definiowana jest zawartość dodawanego elementu np. tekst lub link do obrazu Przykładowe zastosowanie dodające określony tekst po tekście zawartym w wybranym paragrafie p :: after { content : \" this text will be added after \" ; color : blue ; } ::before - tworzy pseudo-element, który reprezentuje pierwsze dziecko wybranego selektora HTML, posiada właściwość content analogiczną do ::after ::selection - odwołuje się do podświetlenia wybranego tekstu znajdującego się w selekcji Przykładowe zastosowanie p :: selection { background-color : red ; } ale może zawierać również: color , background-color , cursor , caret-color , outline , text-decoration , text-emphasis-color, text-shadow ::marker - pozwala na stylowanie markera listy Przykładowe zastosowanie ul li :: marker { color : red ; font-size : 150 % ; } ::placeholder - pozwala na stylowanie fragmentu formularza który przyjmuje input Przykładowe zastosowanie input :: placeholder { color : red ; font-size : 1.2 em ; font-style : italic ; } Pełna lista (łącznie z jeszcze nie w pełni wdrożonymi pseudoelementeami) znajduje się tutaj Źródło i polecane linki: https://blog.logrocket.com/a-guide-to-css-pseudo-elements/ https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements https://www.w3schools.com/css/css_pseudo_elements.asp https://css-tricks.com/almanac/selectors/a/after-and-before/ https://css-tricks.com/pseudo-element-roundup/","tags":"css","url":"css-pseudo-elementy.html","loc":"css-pseudo-elementy.html"},{"title":"CSS: box-sizing","text":"Box-sizing Możliwe wartości do zastosowania przy tej właściwości border-box - wielkość kontenera (div) jest dokładnie taka jak wskazano - definiuje wielkość kontenera po jego granicy content-box- podstawowe, zachowanie się kontenera (div) od obszaru, w którym znajduje się jego zwartość /wskazana wartość wielkość pudełka odnosi się do jego zawartości, - oznaczo to że margines jak oraz padding będą naddane ponad wskazaną wielkość padding-box - wielkość kontenera jest zależna od paddingu , granica jest nadana Przykładowe zastosowanie div { box-sizing : border-box ; width : 100 % ; border : solid #5B6DCD 10 px ; padding : 5 px ; } Kliknij tutaj: Interaktywna aplikacja do sprawdzania wielkości boxa Źródło i polecane linki: https://www.w3schools.com/css/css3_box-sizing.asp https://www.youtube.com/watch?v=WlGQdgy-M6w https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing https://css-tricks.com/box-sizing/ https://tympanus.net/codrops/css_reference/box-sizing/","tags":"css","url":"css-box-sizing.html","loc":"css-box-sizing.html"},{"title":"CSS - składnia selektory","text":"Schemat reguła { - deklaracja właściwość - wartość ; } Selektor znacznika np strong Selektor klasy poprzedzony jest kropką . Selektor id poprzedzony jest haszem # Selektor id nadaje priorytet regule ważniejszy od niż ten posiadający klasę, a selektor znacznika/typu ma najmniejszy priorytet. Selektory elementów * - każdy element/ selektor uniwersalny e p - element \"p\" będący potomkie m elementu \"e\" e > p - element \"p\" będący dzieckiem elementu \"e\" e + p - element \"e\" bezpośrednio poprzedzony elementem \"e\" e ~ p - element \"e\" poprzedzany przez element \"p\" Selektory atrybutów e[atrybut] - element zawierający wybrany atrybut a [ target ] { background - color : yellow ; } < a href = \"http://www.wikipedia.org\" target = \"_top\" > wikipedia . org </ a > e[atrybut=\"wartość\"] - element posiadający atrybut z konkretną wartością a[target=\"_blank\"] { background-color: yellow; } <a href= \"http://www.wikipedia.org\" target= \"_top\" > wikipedia.org </a> <a href= \"http://www.w3schools.com\" target= \"_blank\" > w3schools.com </a> e[atrybut~=\"konkretna_wartość\"] - element zawierający atrybut, którego częścią jest konkretna wartość [ title ~ = \"flower\" ] { border : 5 px solid yellow ; } < img src = \"img_flwr.gif\" title = \"flower\" width = \"224\" height = \"162\" > Pełna lista Gra selektory http://flukeout.github.io/ Moce selektorów Źródło i polecane linki: https://the-awwwesomes.gitbooks.io/html-css-step-by-step/content/pl/css-advanced-selectors/index.html https://developer.mozilla.org/pl/docs/Web/CSS/Na_pocz%C4%85tek/Selektory https://stuffandnonsense.co.uk/archives/css_specificity_wars.html","tags":"css","url":"css-selektory.html","loc":"css-selektory.html"},{"title":"CSS - float","text":"Właściwość float wskazuje służy do pozycjonowani oraz formatowani treści wskazuje w jaki sposób element ma pływać (float) left - znajduj się po lewej stronie right - znajduj się po prawej stronie none - nie pływaj inherit Przykładowe zastosowanie img { float : right ; } Układ strony przy wykorzystaniu właściwości float Clear Właściwość clear definiuje po której stronie elementu pływające (float) elementy nie powinny się znajdować Możliwe wartości clear: none , left , right , both , initial , inherit clear - żaden z elementów pływający nie może znajdować się po lewej lub prawej stronie none - elementy pływające po obu stronach right/left - żaden z elementów pływający nie może znajdować się po lewej/prawej stronie Przykładowe zastosowanie img { float : left ; } p . clear { clear : both ; } Clearfix/Floatfix Metody na pozbycie się funkcji float u dzieci pływającego rodzica Przykładowe zastosowanie . clearfix :: after { <!-- dodaje niewidzialny element/treść --> content : \"\" ; <!-- elementy pływające po żadnej ze stron --> clear : both ; <!-- element zachowuje się jako tabela --> display : table ; } Overflow Właściwość overflow: auto wpasowuje element znajdujący się w pływającym elemencie (float) tak aby nie wystawał po za niego - metoda starsza i wychodząca obecnie z użycia Przykładowe zastosowanie .clearfix { overflow: auto ; } Źródło i polecane linki: Clear https://www.tutorialbrain.com/css_tutorial/css_clear/ Clearfix https://www.youtube.com/watch?v=2tC4PIlEz_o https://www.w3schools.com/howto/howto_css_clearfix.asp float https://www.w3schools.com/css/css_float.asp","tags":"css","url":"css-float.html","loc":"css-float.html"},{"title":"CSS: place-items (umieść element)","text":"Deklaracja place-items (podobnie jak align-items ) odnosi się do pozycjonowania dzieci elementu, których układ jest zależny od układu Flexbox lub Grid . Deklaracja place-items jest połączeniem align-items oraz justify-items i przyjmuje podwójne wartości w odpowiadające kolejno za align-items o następnie za justify-items . Wymaga wcześniejszej deklaracji floatbox lub grid Przykładowe zastosowanie .item { display: flexbox ; place-items: start center ; } i odpowiada to: .item { display: grid ; align-items: start ; justify-items: center ; } W momencie kidy jedna wartość jest wskazana, wówczas przyjęta jest ona jako wspólna dla obu właściwości Przykładowe zastosowanie .item { display: flexbox ; place-items: start ; } i odpowiada to: .item { display: flexbox ; align-items: start ; justify-items: start ; } Przyjmuje wartości auto , normal, strech, start end, center, left, right, flex-start, flex-end, self-start, self-end, first-baseline, last-baseline Źródło i polecane linki: https://css-tricks.com/almanac/properties/p/place-items/ https://css-tricks.com/almanac/properties/a/align-items/","tags":"css","url":"css-place-items.html","loc":"css-place-items.html"},{"title":"CSS - wyświetlanie blokowe, liniowe i inne","text":"Display odpowiada za sposób w jaki sposób dane elementy będą wyświetlane Właściwości deklaracji display inline - domyślna funkcja, elementy wyświetlane są w sposób liniowy / obok siebie block - elementy wyświetlane są w sposób blokowy / jeden pod drugim inline-block - charakterystyka bloku ale trzyma się linii / bloki jeden obok siebie none - chowa element (usuwa również przestrzeń przeznaczoną na element, w odróżnieniu od visibility: hidden; ) table - pozwala elementowi zachowywać się jak tabela opcjonalne podtypy min.: table-column , table-row , table-column-group , table-row-group , table-header-group , table-footer-group Źródło i polecane linki: https://www.tutorialbrain.com/css_tutorial/css_display/ https://css-tricks.com/almanac/properties/d/display/","tags":"css","url":"css-wyswietlanie-display.html","loc":"css-wyswietlanie-display.html"},{"title":"CSS - pozycjonowanie","text":"Podstawowe właściwości position static - wartość domyślna, pozycja zgodna z układem strony relative - relatywnie do swojej domyślnej pozycji przesunięty o zdefiniowaną właściwość/wartość top , right , bottom , left Przykładowe zastosowanie div . relative { position : relative ; left : 30 px ; border : 3 px solid #73AD21 ; } fixed - pozycja relatywna do wyświetlacza (viewport) - zawsze w tym samym miejscu top , right , bottom , left absolute - pozycja relatywna do najbliższego spozycjonowanego rodzica (rodzic musi mieć zdefiniowaną właściwość position: relative/fixed ) Przykładowe zastosowanie .container { position: relative ; } .center { position: absolute ; left: 0 ; top: 50% ; width: 100% ; text-align: center ; font-size: 18 px ; } sticky - pozycja zależna od pozycji scrolla i łączy w sobie cechy relative oraz fixed . Element jest pozycjonowany w sposób relative do momentu, w którym określone kryterium (scrolla) nie jest spełnione, wówczas spełnia cechy fixed inherit - pozycja jest dziedziczona / domyślnie nie jest Przykładowe zastosowanie div . sticky { position : -webkit- sticky ; /* Safari */ position : sticky ; top : 0 ; background-color : green ; border : 2 px solid #4CAF50 ; } Bonus z-index - wskazuje na której pozycji ma się wyświetlić dany element - ma to szczególne znaczenie w kontekście obiektów które się zakrywają lub częściowo pokrywają Przykładowe zastosowanie, obiekt ustawiony na pozycję -1 będzie pod spodem img { position : absolute ; left : 0 px ; top : 0 px ; z-index : -1 ; } Źródła i polecane linki: Przykłady: https://www.w3schools.com/css/css_positioning.asp https://css-tricks.com/almanac/properties/p/position/ Opis: https://dzone.com/articles/css-position-relative-vs-position-absolute https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/ https://www.tutorialbrain.com/css_tutorial/css_position/","tags":"css","url":"css-pozycjonowanie.html","loc":"css-pozycjonowanie.html"},{"title":"Flexbox - wprowadzenie","text":"Flexbox jest technologią odpowiedzialną za układ treści znajdujących się na stronie internetowej w dosłownym tłumaczeniu można by to nazwać elastycznym modelem pudełkowym . Faktycznie ten sposób organizacji tzw layoutu lub też interfejsu oparty jest na równorzędnych kontenerach zwierających treść, które mogą być organizowane w sposób poziomy (liniowy) lub pionowy (kolumnowy) i pozwala na tworzenie prostej i czytelnej struktury strony i pozwala w relatywnie sposób na budowę responsywnego projektu strony internetowej. Stosując flexboxa możemy łatwo: Pionowe i poziome wycentrować element względem rodzica Uszeregowanie elementów by wypełniały rodzica a odległość pomiędzy nimi była równa Elementy będą automatycznie zawijane w zależności od wielkości ekranu Istotne jest to aby pamiętać, że dziecko rodzica zorganizowane w sposób flexboxowy również może być rodzicem dla własnego dziecka, którego pozycja będzie oparta na flexboxie Podstawowe deklaracje - rodzic display: flex Zdefiniowanie układu opartego o flexboxa dokonujemy poprzez deklarację display: flex i oznacza to, że dzieci danego div 'a (dzielnika/kontenera) będą zachowywały się w sposób elastyczny Przykładowe zastosowanie div { display : flex ; } Podstawą zarządzania treścią opartą na flex-boxie są dwie osie \"pozioma\" tzw. oś główna - ang. main axis oraz \"pionowa\" tzw. oś przecinające - ang. cross axis (te są zależne od zdefiniowania głównego kierunku organizacji projektu przy pomocy flex-direction z podstawowego liniowego w kolumnowy i dlatego istotne jest aby nie przywiązywać się do kierunków pionowy czy poziomy bo są one relatywne) Schemat przedstawiający ogranizację flexboxa Układ liniowy vs kolumnowy flex-direction Deklaracja dotycząca rodzica i definiująca podstawowy układ zawartych w nim elementów (flex-items/dzieci) row - układ liniowy/poziomy zaczynający się od lewej row-reverse - układ poziomy zaczynający się od prawej column - układ kolumnowy/pionowy zaczynający się od góry column-revers - układ kolumnowy/pionowy zaczynający się od dołu Przykładowe zastosowanie div { display : flex ; flex-direction : row ; } justify-content Deklaracja wyrównująca elementy wzdłuż głównej osi (main-axis) flex-start - obiekty są przyklejone do początku (start) flex-end - obiekty są przyklejone do końca (end) center - obiekty są wyśrodkowane wzdłuż linii space-between - obiekty są równo rozdystrybuowane w ramach rodzica i przyklejone do granic space-around - obiekty są równo rozdystrybuowane w ramach rodzica z taką samą odległością pomiędzy sobą jak i granicą [pierwszy obiekt ma odległość w skali 1 po lewej ale 2 po prawej ponieważ sumuje się odległość obiektu 1. i 2.] space-evenly - odległość pomiędzy każdym z elementów i granic jest równa start / end / right / left - obiekty są zależne od writing-mode i uporządkowane kolejno od początku, końca, prawa, lewa align-items Deklaracja wyrównująca elementy wzdłuż osi przecinającej (cross-axis) flex-start - elementy ułożone są przy górnej krawędzi rodzica (cross start) flex-end - elementy ułożone są przy dolnej krawędzi rodzica (cross end) center - wyśrodkowane wobec osi przecinającej stretch - wypełnia cały kontener baseline - wyśrodkowane wobec linii bazowej align-content Deklaracja wyrównująca elementy wzdłuż głównej osi (main-axis) flex-start - element spakowane są do krawędzi górnej rodzica (cross-start) flex-end - elementy spakowane są do krawędzi dolnej rodzica (cross-end) center - elementy spakowane są do środka/ wycentrowane w ramach kontenera stretch - elementy są rozciągnięte i wypełniają całą powierzchnię rodzica space-between - elementy są równo rozdystrybuowane po kontenerze z równą przestrzenią pomiędzy sobą space-around - elementy są równo rozdystrybuowane po kontenerze flex-wrap Deklaracja flex-wrap definiuje zawijanie się zawartych w rodzicu elementów. Przykładowe zastosowanie div { display : flex ; flex-direction : row ; flex-wrap : wrap ; } Możliwe opcje: nowrap oraz wrap-reverse Więcej na ten temat znajdziesz tutaj flex Przy pomocy deklaracji flex istnieje możliwość zdefiniowania minimalnej wielkości dziecka np. div { display : flex ; flex-direction : row ; flex-wrap : wrap ; flex : 200 px } Ta deklaracja może być użyta również w ramach deklaracji dziecka - patrz niżej flex-flow flex-direction + flex-wrap = flex-flow np. div { flex-flow : column wrap ; } Podstawowe deklaracje - dzieci (flex-items) align-self Ta deklaracja pozwala na przedefiniowanie układu zdefiniowane z pozycji rodzica dla każdego elementu osobno -> patrz align-items flex-start flex-end center baseline stretch flex-grow/shrink Definiuję współczynnik (factor) w jakim poszczególne elementy kurczą (grow) się lub rozrastają (shrink) .obiekt { flex-shrink: 1 ; } .obiekt: nth-of-type ( 2 ) { flex: 2 ; } flex-basis flex-basis definiuje wielkość danego elementu, np. .obiekt { flex-basis: 20% ; <podstawową wartością jest: auto> } flew po raz kolejny flex-grow/shrink + flex-basis = flex Deklaracja flex w ramach dziecka może być użyta w kontekście potrzeby zdefiniowania jego wielkości oraz istotności w rozrastaniu-kurczeniu się wobec jego rodzeństwa - gdzie liczba na początku definiuje skalę a kolejna wielkość wyrażoną w px. Przykładowe zastosowanie: .obiekt { flex: 1 200 px ; } .obiekt: nth-of-type ( 3 ) { flex: 2 200 px ; } order Definiuję kolejność w jakiej dany element się pojawia np. order: -1 będzie oznaczał, że dany element nadpisze kolejność elementu zawartą w html i wyświetli go przed pierwszym elementem. Podsumowanie Dla przypomnienia: istotne jest to aby pamiętać, że dziecko rodzica zorganizowane w sposób flexboxowy również może być rodzicem dla własnego dziecka, którego pozycja będzie oparta na flexboxie Źródła (w tym grafik): developer.mozilla.org rejkowicz.pl css-tricks.com","tags":"css","url":"css-flexbox.html","loc":"css-flexbox.html"},{"title":"VSC - wtyczki warte polecenia","text":"Planowane","tags":"VSC","url":"vsc-wtyczki.html","loc":"vsc-wtyczki.html"},{"title":"Visual Studio Code - skróty klawiszowe","text":"Przydatne skróty klawiszowe o których warto pamiętać korzystając z Visual Studio Code Podstawowe skrót klawiszowy Funkcja Ctrl+Shift+P, F1 Wywołaj Command Palette Ctrl+P Wywołaj wyszukiwarkę plików Ctrl+Shift+N Otwórz nowe puste okno VSC Edytowanie Funkcja Ctrl+X Wytnij + opróżnij linię Ctrl+Shift+K Wykasuj linię Ctrl+Shift+\\ Przejdź do sparowanego nawiasu Ctrl+] / Ctrl+[ Dodaj/Usuń wcięcie lini Home / End Idź do początku/końca linii Ctrl+ ↑ / ↓ Skrolowanie góra/dół - pojedyncza linia Alt+ PgUp / PgDn Skrolowanie góra/dół - cała strona Ctrl+K Ctrl+ [ / ] Zwinięcie/rozwinięcie regionu Ctrl+K Ctrl+0 / Ctrl+K Ctrl+J Zwinięcie/rozwinięcie wszystkich regionów Alt+Z Włączenie zwijania tekst Zarządzanie edytorem Funkcja Ctrl+\\ Podział edytora Ctrl+W Zamknięcie edytora Wzbogacone edytowanie Funkcja Ctrl+Space Wywołaj podpowiedź Ctrl+Shift+Space Wywołaj sugerowane parametry F12 Idź do definicji Ctrl+Shift+F10 Podgląd definicji --- Edytowanie wielu Funkcja --- --- Ctrl+Shift+L Zaznaczenie tych samych sekcji oraz ich edycja Ctrl+F2 Zaznaczenie tych samych słów oraz ich edycja lewy-Alt+Click Wstaw kursor w dane miejsce/edycja Wyświetlanie Funkcja Ctrl+B Włączanie bocznej listwy Ctrl+ +/- Powiększenie/pomniejszenie całości Ctrl+V Otwórz podgląd Markdown Ctrl+K Z Motyw zen Znajdź i zmień Funkcja Ctrl+H Znajdź i zmień Nawigacja Funkcja Ctrl+G Idź do lini F8 Przejdź do kolejnego błędu Zarządzanie plikami Funkcja Ctrl+K R Otwórz w plik w eksplorerze Ctrl+K O Otwórz plik w nowym oknie Ctrl+K P Kopiuj ścieżkę edytowanego pliku Terminal Funkcja Ctrl+` Otwórz terminal Ctrl+Shift+` Otwórz nową zakładkę terminala Źródło: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf dla windowsa: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf","tags":"VSC","url":"vsc-skroty-klawiszowe.html","loc":"vsc-skroty-klawiszowe.html"},{"title":"Ubuntu - skróty klawiszowe","text":"Przydatne skróty klawiszowe o których warto pamiętać korzystając z Ubuntu Klawisz Super znajduje się pomiędzy lewym Ctrl a Alt - często z logiem Okienka Skrót klawiszowy Funkcja ctrl + alt + T Wywołania terminala Super Wywołanie okna \"aktywności\" Super + Page Down / Page Up Szybkie przełączanie pomiędzy \"przestrzeniami pracy\"/work spaces Super+D Minimalizacja wszystkich okien Super+H Minimalizacja okna aplikacji Shift+PrnScr Zrobienie zrzutu ekranu z możliwością wyboru fragmentu ekranu Super + ← / → Przesunięcie okna aplikacji (skupionej) do wybranego boku i zajęcie połowy ekranu Super + ↑ Maksymalizacja okna aplikacji lewy-Alt + F2 Wywołanie linii komend ctrl + alt + tab Wybór pomiędzy górny, paskiem, oknami a dolnym paskiem - dalsza nawigacja klawiaturą Źródło: https://www.omgubuntu.co.uk/2019/09/useful-ubuntu-keyboard-shortcuts","tags":"ubuntu","url":"ubuntu-skroty-klawiszowe.html","loc":"ubuntu-skroty-klawiszowe.html"},{"title":"Wprowadzenie do Linuxa i Ubuntu - podstawowe komendy","text":"Linux Komenda Objaśnienie ls okaż wszystkie pliki i katalogi w danym katalogu ls -a pokaż wszystkie pliki i katalogi łącznie z ukrytymi cd dir zmień katalog na wskazany cd zmień katalog na \"domowy\" pwd wskaż adres bieżącego katalogu (print working dir) mkdir dir stwórz katalog (make) rm file usuń plik (remove) rem -r dir usuń katalog rm -f file forsuj usunięcie pliku touch file stwórz lub odśwież plik head file wyświetl pierwsze 10 linii pliku ps wyświetl aktualny aktywny proces top wyświetl wszystkie procesy kill pid zakończ proces o wybranym id killall proc zakończ wszystkie procesy o wybranej nazwie chmod 777 czytanie i edytowanie pliku dla wszystkich grep -r patern dir szukajwzoru w katalogu locate file znajdź plik Ubuntu Komenda Objaśnienie sudo command wywołaj komendę jako administrator sudo -s otwórz powłokę jako root Źródła: https://garywoodfine.com/linux-terminal-command-cheat-sheets/","tags":"ubuntu","url":"linux-ubuntu-komendy.html","loc":"linux-ubuntu-komendy.html"},{"title":"Ubuntu - zamiana bobra na gronostaja","text":"Do tej pory pracowałem na Bionicznym Bobrze (Ubuntu 18.04) ale gdy system zaproponował mi aktualizację na Eonicznego Gronostaja (19.10) postanowiłem z niej skorzystać. Zmiana nie obyła się bez małego zgrzytu. Zawieszający się ekran ładowania Ubuntu 19.10 po aktualizacji Ekran ładowania (tzw. splash screen) się zawiesił, musiałem wyłączyć komputer ręcznie a następnie w momencie pojawienia się Gruba wybrałęm literę 'e' - pozwalającą na edycję ustawień opcji włączania systemu. Za pierwszym razem system od razu się uruchomił bez mojej konieczności zmiany ustawień. W trakcie kolejnego włączani powtórzył się ten sam problem. Tym razem postąpiłem zgodnie z opisanymi w tym miejscu krokami - opcję quiet splash_ zmieniłem na nonsplash system uruchomił się bez większych problemów. Po uruchomieniu się systemu nie przechodziłem kolejnych kroków opisanych w podlinkowanym wyżej poście tylko zaktualizowałem gruba sudo update - grub Na pierwszy rzut oka faktycznie Gronostaj jest szybszy od Bobra w trakcie uruchamiania i zdaje się działać płynniej. Ubuntu 19.10 zmiana motywu na ciemny Bóbr przyzwyczaił mnie do miłego dla oka ciemnego motywu oprogramowania. Fioletowy terminal z zielonymi i jasnymi literami również przypadł mi do gustu (na szczęście zmiana z podstawowego jasnego na ciemny motyw jest prosta) niestety Gronostaj już ciemnego motywu aplikacji nie posiada w trybie podstawowym i trzeba go dodać. W pierwszej kolejności należy zainstalować program Gnome Tweaks Instalowanie programu do zarządzania wyglądem/skórką Ubuntu sudo apt install gnome - tweak - tool W zakładce Appearance -> Themes -> Aplications -> Adwait - skórka podstawowa można zmienić np. na Yaru-dark (z tej obecnie korzystam - zrobiło się nieco ciemniej niż za kadencji Bobra, ale pewnie szybko się przyzwyczaję) Jednak aby powrócić do ciemnych ustawień aplikacji należy zmienić opcję Shell, ta jednak jest nieaktywna Shell -> ! - nieaktywny Na szczęście rozwiązanie trudne nie jest i postępując zgodnie z opisanymi w tym miejscu krokami można dodać nową/starą skórkę - (motywem Gronostaja jest fioletowy i trzeba przyznać, że widoczność tego koloru na ciemnym tle jest słabsza od bobrowego pomarańczowego) Instalujemy skórkę Yaru sudo apt install git meson sassc libglib2 . 0 - dev libxml2 - utils git clone https : // github . com / ubuntu / yaru cd yaru git checkout 2 c22b5178f321f62f8d914e27b4739eecb7e3b6b meson build cd build sudo ninja install (zwróć uwagę, że wybieramy konkretną wersję, która posiada czarną skórkę) Instalujemy rozszerzenie GNOME Shell User themes sudo apt install gnome-tweaks gnome-shell-extensions Restartujemy GNOME Shell ALT + F2 następnie wpisujemy r i wybieramy ENTER W (GNOME) Tweaks wybieramy zakładkę Extensions i włączamy User themes wyłączamy i włączamy program Przechodzimy do zakładki Appearance i możemy w Shell wybrać Yaru-dark Dodatkowe opcje w nowej wersji Ubuntu (które do tej pory zauważyłem) W momencie wybierania linka, który otwiera przeglądarkę pojawiła się nowa opcja configure trusted domains Więcej opcji pojawiło się również przy prawym kliknięciu na ikonę przeglądarki Chromium W podstawowym oknie ustawień (tam gdzie się również wyłącza system) doszła parę nowych ustawień w tym nowa opcja linkująca do zarządzania opcjami zasilania Prawym przyciskiem na głównym ekranie możemy również przejść do ustawień ekranu Część ikon zyskała nową skórkę Zacząłem korzystać z motywu nocnego (podoba mi się opcja dostosowania nasilenia filtra) W przyszłym miesiącu pojawia się kolejna wersja Ubuntu i pewnie również skorzystam z aktualizacji jak tylko mi system taką zaproponuje","tags":"ubuntu","url":"ubuntu-aktualizacja-gronostaj.html","loc":"ubuntu-aktualizacja-gronostaj.html"},{"title":"Wprowadzenie do GITa - podstawowe komendy","text":"Planowane","tags":"git","url":"git-wprowadzenie.html","loc":"git-wprowadzenie.html"},{"title":"Pelican blog - rozszerzenia","text":"Planowany -> CMS https://blurringexistence.net/pelicide-demo/ Źródło: https://github.com/iksteen/pelicide https://github.com/FedericoCeratto/shoebill https://github.com/mirekdlugosz/pelican-metadata-generator http://jsliang.com/sublime-pelican/","tags":"misc","url":"pelican-rozszerzenia.html","loc":"pelican-rozszerzenia.html"},{"title":"Pelican blog - GitHub pages","text":"Krótka instrukcja hostowania bloga przy pomocy GitHub-Pages Instalowanie gh-pages dla Pelicana pip install pelican ghp-import Markdown Sklonowanie pustego repozytorium / Repo wcześniej stworzone na stronie github.com git clone https://GitHub.com/username/username.github.io Stworzenie nowej gałęzi content gdzie przechowywane będą surowe/źródłowe pliki - Git Hub pages będzie czerpało z głównej gałęzi master git checkout -b content (Alternatywnie można korzystać z dwóch repozytoriów - gdzie na jednym są przechowywane pliki źródłowe a na kolejnym jest hostowana strona) Tworzenie treści - stron statycznych gotowej do publikacji. W terminali wpisz (gdzie wyjściowym folderem jest source a output miejsce zapisania plików do wgrania do repozytorium na githubie) - praca na gałęzi content : pelican content -o output -s publishconf.py (gdzie -s oznacza settings/ustawienia a -o miejsce w którym mają się zapisać pliki) Tworzenie plików do wgrania do repozytorium (gdzie output - miejsce zapisu plików może być np. '.' jeśli w danym folderze) ale tego do gałęzi master ghp-import -m \"Generate Pelican site\" --no-jekyll -b master output tłumacząc ghp-import -m \"wiadomość\" --no-jekyll -b [nazwa_gałęzi] [folder_zapisu_danych] Wypchnięcie do repozytorium git push origin master (alternatywnie można zautomatyzować ten proces make publish więcej na ten temat tutaj ) Dodawanie nowej treści do gałęzi content git add content git commit -m 'treść wiadomości' git push origin content Źródło: https://opensource.com/article/19/5/run-your-blog-github-pages-python","tags":"pelican-blog","url":"pelican-blog-ghpages.html","loc":"pelican-blog-ghpages.html"},{"title":"Markdown - podstawowa składnia","text":"Markdown jest lekkim językiem znaczników (Lightweight markup language - LML) służącym do formatowanie tekstu (za: Wikipedia oraz Ang. - Wikipedia ). Wprowadzono go po raz pierwszy w 2004 i celem autorów było stworzenie języka, który jest prosty do pisania oraz czytania, a przy okazji miał być prosty w konwersji to języka XHTML lub HTML. Szybkie wprowadzenie do języka Markdown Nagłówki/Headers # H1 ## H2 ### H3 #### H4 ##### H5 ###### H6 Nagłówek1 Nagłówek2 Nagłówek3 Nagłówek4 Nagłówek5 Nagłówek6 Style liniowe/inlinowe ** bold ** ~~ crossed ~~ ---strikethrough text--- * italics * pogrubiony ~~przekreślony~~ (tu się nie sprawdza) ---wykreślony tekst--- (również się nie sprawdza :( ) italik Obrazy ! [ Nazwa obrazu ]( / sciezka / obrazu . jpg ) można również: ! [ Alt Text ]( url ) Zmiana wielkości obrazu ! [ Nazwa obrazu ]( / sciezka / obrazu . jpg ){ width = 50 % } ! [ bobr ]( gronostaj . png ){ : height = \"40px\" width = \"40px\" } Linki [ nazwa obiektu / strony ]( http : // przykladowy . link . com ) [ Notatki z frontu ]( https : // kostyrko . github . io / zfrontu / ) Notatki z frontu można również: https : // kostyrko . github . io / zfrontu / https://kostyrko.github.io/zfrontu/ (tu akurat nie działa za to np. w VSC się sprawdza) link działający w ramach strony [ sprawdź również tą część tekstu ]( # strony ) gdzie : #### Strony warte odwiedzenia lub (pewniejsza opcja, ale wykorzystująca HTML) [Strony warte odwiedzenia](#strony) gdzie: <a name= \"strony\" > ### Strony warte odwiedzenia </a> kolejna możliwość [ Strony warte odwiedzenia ]( # strony ) gdzie ### Strony warte odwiedzenia { # strony } Strony warte odwiedzenia Kod w lini tekstu ` back quote ` odwrotny apostrof - na lewo od 1 (tam gdzie lambda) Kod blokowy Potrójny zwrotny apostrof ``` no = \"Python syntax highlighting\" print s ``` no = \"Python syntax highlighting\" print s Ze wskazaniem języka :) ``` python yes = \" Python syntax highlighting \" print s nice for < bold > html </ bold > ``` ``` javascript var s = \" JavaScript syntax highlighting \" ; alert ( s ) ; ``` ``` html nice for < bold > html </ bold > ``` s = \"Python syntax highlighting\" print s var s = \"JavaScript syntax highlighting\" ; alert ( s ); nice for < bold > html </ bold > Blokowe cytaty > Blokowe cytowanie wybranego fragmentu tekstu Blokowe cytowanie wybranego fragmentu tekstu Tabela | Kolumna 1 | Kolumna 2 | Kolumna 3 | ---|---|---| | Wartość 1 | Wartość 2 | Wartość 3 | | Wartość 4 | Wartość 5 | Wartość 6 | | Wartość 7 | Wartość 8 | Wartość 9 | Kolumna 1 Kolumna 2 Kolumna 3 Wartość 1 Wartość 2 Wartość 3 Wartość 4 Wartość 5 Wartość 6 Wartość 7 Wartość 8 Wartość 9 Tworzenie list Uporządkowana lista 1 . Obiekt 1 1 . Obiekt 2 1 . Obiekt 3 1 . Obiekt 3 a 1 . Obiekt 3 b Obiekt 1 Obiekt 2 Obiekt 3 Obiekt 3a Obiekt 3b Nieuporządkowana: * Obiekt 1 * Obiekt 2 * Obiekt 3 * obiekt 3 . 1 * obiekt 3 . 2 Obiekt 1 Obiekt 2 Obiekt 3 obiekt 3.1 obiekt 3.2 Styl mieszany: 1 . Obiekt1 2 . Obiekt2 * Obiekt3 Obiekt1 Obiekt2 Obiekt3 Tworzenie linii Dwa z możliwych sposobów (potrójne znaki): ___ --- Emotki :smile: (nie działa) Strony warte odwiedzenia www.markdownguide.org - nauka języka, wersja podstawowa jak i rozszerzona oraz Cheat Sheet Dillinger - onlinowy edytor języka Markdown - w jednym oknie się wpisuje w kolejnym widać tego efekty www.markdowntutorial.com/ - interaktywna nauka języka Markdown online Markdown cheat sheet Emoji cheat sheet Wpis na Wikipedii poświęcony językowi Markdown my heading text","tags":"pelican-blog","url":"markdown.html","loc":"markdown.html"},{"title":"Pelican blog - instalacja","text":"Gdy szukałem platformy do tworzenia bloga, wybór w pierwszej kolejności padł na Jakyll (Ruby on Rails), rozważałem również Hugo (Go), ostatecznie padło jednak na Pelicana bo ten \"stoi\" na Pythonie, choć jest dużo mniej popularny od wcześniej wspomnianych generatorów stron statycznych. W przyszłości planuję również wypróbować Lektora , który również wywodzi się z Pythona W trakcie tworzenia bloga przy pomocy Pelicana korzystałem z informacji zawartych na tym blogu posiłkując się informacjami zawartymi w dokumentacji Pelicana oraz Flexa (wybranego przeze mnie motywu) - patrz źródła ) jak i repozytoriów na githubie wykorzystujących ten sam motyw. Instalacja pip install pelican pip install markdown Uruchomienie pelican - quickstart przygotowanie struktury folderów blog └── output └── source Wypełnienie podstawowych informacji Where do you want to create your new web site ? [.] . # wskazanie folderu w kt ó rym ma by ć zapisana strona What will be the title of this web site ? ... z frontu # nazwa Who will be the author of this web site ? kostyrko # autor What will be the default language of this web site ? [ English ] pl # j ę zyk Do you want to specify a URL prefix ? e . g ., https : // example . com ( Y / n ) n # wskazanie adresu strony Do you want to enable article pagination ? ( Y / n ) Y # ograniczona ilo ść post ó w / artyku łó w na stronie - paginacja What is your time zone ? [ Europe / Paris ] Europe / Warsaw # strefa czasowa Do you want to generate a tasks . py / Makefile to automate generation and publishing ? ( Y / n ) Y Powyżej zawarte informacje będą zawarte w pliku pelicanconf.py i można je zmienić Uzyskany efekt: blog ├── output └── source ├── content ( folder ) ├── output ( folder ) ├── pelicanconf . py └── publishconf . py w pliku pelicanconf.py definiujemy miejsce w którym będzie generować się statyczna strona OUTPUT_PATH = '../output' Tworzymy zawartość strony komendą: pelican content Tworzymy server lokalny pozwalający na przeglądanie strony (:8000) pelican --listen Przeglądamy osiągnięty efekt: http://127.0.0.1:8000/ Przydatne liki i źródła: mBuild A Blog With Pelican And Python - Pt. 1 Installation & Theme Build A Blog With Pelican And Python - Pt. 2 Creating Content How to Create Your First Static Site with Pelican and Jinja2 Ustawienia dla Pelican blog - pelicanconf.py Dokumentacja Pelican blog Flex Inne generatory stron statycznych korzystające z Pythona: Lektor - posiada wbudowany CMS (Content Management System) Motywy warte uwagi: Pure","tags":"pelican-blog","url":"pelican-blog-instalacja.html","loc":"pelican-blog-instalacja.html"}]};