# AndersBille06012021
Eksamens projekt


API routes:

/patient
er der oprettet:

    get
    post
    delete
    put
-------
delete skal der angives et id =>f.eks. /patient/11

på .get kan der også sendes efter et specifikt id
f.eks. => /patient/6


de samme finde for 
/behandling 
og
/nyheder
---------------------------------------------------------------------------
Docker

docker bliver bygget ud fra dockerfile ved at bruge efterfølgende kommando inde i projektets mappe (" .") til sidst er vigtigt ellers ved den ikke hvor den skal finde dockerfile
docker build -t andersbille06012021 .

du kan ved brug af docker images se om den er blivet bygget

du køre det efterfølgende med følgende kommando
docker run -p 3963:3963 -d andersbille06012021

-p 3963:3963 specificere hvilken port det skal køre på
den første er den port man skal bruge efter localhost og den første er det man "lytter" på inde i server.js
-d gør at instancen af docker gøre "detached" så man ikke låser en kommandopromt til eller gør det umuligt at ændre noget imens serveren kører

------------------
docker compose anvender dockerfile til at gøre det mere simpelt at starte et projekt op
i compose kan man anvende flere end en dockerfile, det kan være som f.eks. en dockerfile til nodejs og mongodb

docker compose up -d 
vil gøre det detached, så det ikke fastlåser din terminal
du kan stoppe det igen, ved at finde container id med docker ps
og stoppe det med 
docker stop [docker_container_id]


----------------------------------------------------
Socket projekt
github link: https://github.com/yokarak/SocketProjects

man ville kunne bruge de induviduelle ip's på hver patient, til at skabe en forbindelse ved brug af http
man kan tage udgangs punkt i "Serverbasic" og "Clientbasic" som var på 2 forskellige bærbare som snakkede sammen over et wifi-hotstop
(pga. skolens strenge regler i deres netværk)