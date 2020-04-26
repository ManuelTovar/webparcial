import React from 'react';
import './App.css';
import HeaderBar from "./Components/FirstPart/HeadBar/HeaderBar.js";
import Categories from "./Components/SecondPart/Categories/Categories.js";
import Card from "./Components/SecondPart/Card/Card.js";


function App() {
  return (
    <div className="App">

      <div className="o-first-part">

        <HeaderBar NamePage="Manuflix" user="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" />

      </div>

      <div className="o-second-part">

        <Categories CategoriesTitle="Series">
          <Card NameMovie="Suits" url="https://news.otakukart.com/wp-content/uploads/2019/02/images-75.jpeg" />
          <Card NameMovie="How i meet your mother" url="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/fox-HOWIMET_6-Full-Image_GalleryCover-en-US-1479763475436._UY500_UX667_RI_V6GNJKnaFtr6D13Yu3A0fCfamf9I0U1p_TTW_.jpg" />
          <Card NameMovie="Lucifer" url="https://jornalggn.com.br/sites/default/files/2019/09/satanas-e-o-ultimo-dos-humanistas-na-serie-lucifer-por-wilson-ferreira-lucifer.jpg" />
          <Card NameMovie="Umbrella academy" url="https://es.web.img2.acsta.net/r_640_360/newsv7/19/03/14/17/37/2199465.jpg" />
          <Card NameMovie="Friends" url="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/02/22/15823676869805.jpg" />
          <Card NameMovie="Two and a half men" url="https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2015/02/2hombres.jpg?itok=k8l2JBCf" />
          <Card NameMovie="Sex eduaction" url="https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2020/02/sex-education-1.jpg?itok=wl4xz75l" />
          <Card NameMovie="Elite" url="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/elite.jpg?itok=iQZWz71O" />
          <Card NameMovie="Breaking bad" url="https://www.elcolombiano.com/documents/10157/0/580x365/0c0/0d0/none/11101/FKMT/image_content_34101520_20190825120850.jpg" />
          <Card NameMovie="Los 100" url="https://es.web.img3.acsta.net/r_640_360/newsv7/19/08/05/09/16/4081553.jpg" />
        </Categories>

        <Categories CategoriesTitle="Peliculas de Accion">
          <Card NameMovie="La caida del alcon negro" url="https://pasionporelcine.net/wp-content/uploads/2013/01/Cr%C3%ADtica-Black-Hawk-derribado-Josh-Hartnett-1038x576.jpg" />
          <Card NameMovie="Vikingos" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ39Ezik4BuH26WHYkoNTwU2vHIaX6NLwVRaE1uTkyisVq5f0NI0z37OslCylq-X-EgjcsWz1sUxjbTyr0jdh26dkSc.webp?r=21a" />
          <Card NameMovie="El principe de persia" url="https://img.ecartelera.com/noticias/fotos/54900/54921/2.jpg" />
          <Card NameMovie="Jhon Wick 2" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjAWtdFu2rv1EWjMyWYO24beQfL5e2CF8WbyEazPZOoxFtfhLywu7PrCEQCzBNs1ePOp8U9cYF5Wez5NU-PRIZ16Ac.webp?r=245" />
          <Card NameMovie="Jhon Wick" url="https://cdn.forbes.com.mx/2019/02/keanu-640x360.jpg" />
          <Card NameMovie="Fast and furious 7" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSuMGqIcwQsMDNq3Qt7NzMVk3-YptPvP3EM0Np_Jjlys4UoNKnlP0pB1oHyCstCJyB_WrdCjxmH2pQ0HF3YCqHt6szM.webp?r=195" />
          <Card NameMovie="Fast and furious" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUSCcY-cAZj4o9ITY4DIllazmxF0ziREUMZ4gO0eakTVpHlyej6MNx2AXH6zRmFgx2MYA5qEuKP6zpl7BWAUDlWByV4.webp?r=d41" />
          <Card NameMovie="Mision imposible NS" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf6ZSQWq7-jQZ6iFi7MQAYerQjg17TuRVV9u7kzCx-Fkm2GkNY579uvMFnZm_E0z1PK66r7IhXzA28ib4ZVDi2okGd4.jpg?r=aee" />
          <Card NameMovie="La momia" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpy_tBCFoDZsgjvf3kJgooGjqXPfU7-aadpsEVm3zbp7tak2xJmrH015BKq2Vj1yeocnKeT_JV6j_NXKBaMidyXMj4.jpg?r=7a3" />
          <Card NameMovie="Transformers 5" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS7R2X1GPgIKJOa1MEFPEp-QWmX9SQTb8ppDk65vGmazCzDjVZecEsCFoGmp37y5qmHdWKMHnLz6GoaLYsrRhdWCar4.jpg?r=f04" />
        </Categories>

        <Categories CategoriesTitle="Comedias">
          <Card NameMovie="La propuesta" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf8dDh4VKKiKDVBZ7SnA0tq74UHIHM47GnCF8bNnn5xgsenyy5shu2gVF0EGMuv3TbaVtVCi2ZybRlKB2sqyCXp0LL8.webp?r=564" />
          <Card NameMovie="Forrest Gump" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXk0-herkwBQewNklIdxGgmh6B26WCKyIFNftTUbiOhzI7Pz3BQN2Op7HBQllwKDDFHYn8Qbn6GV7lWdO9RYBriwHWE.webp?r=deb" />
          <Card NameMovie="Una esposa de mentiras" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZRpRHlwEI1qcZzH6NVJZPZ0WJOUka0wmJbVEfpMltFUF36GD3A7bMYhFPUgYLdTCyvDuXAkjuifxWhs2m7ABoj9j8g.webp?r=7fd" />
          <Card NameMovie="Ni en tus sueños" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2nRvNfEtxqW9FWV_Bmz51CfxO1hvSLneA45_V64uBRQ5e5eJ_4L31BM4jtoBUxtKtvr0KERUgWPmjKmSFX-9Z8msc.webp?r=78a" />
          <Card NameMovie="Baywatch" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYfA0Xb55wuzGNIWgw7iMqxQvw6eUZjMK-_VJhfslckjia9-IaDllfvMF8o28oy5dqQMr9u7q6hS6TujCMo0MB1uf1I.webp?r=96c" />
          <Card NameMovie="Shrek" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXstAEvl7OB1QI79qW0DwPBVr27D_Wu04Ln-8nDeLfVzhUNsjNfqkmFv9paSSe3HM3gkfOjQMN2VKtOysPQwlbgZ0TY.webp?r=206" />
          <Card NameMovie="Supercool" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYORUH9IqTPmvV_p2bYGTKZ2pM8UtpIJ1NghZvBzN5E59nEU2nLEDdOfDlY8ZCf0n4e2cXn7p3CQt0hCarAl91q-sTI.webp?r=c5c" />
          <Card NameMovie="Aceptados" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYRJ2ujQAgdySH5N5i7DiPf-Pfsfj9KHKvfUEySSsAGS_YNHgoMahrjX32CdSIHB6D4wCgS-8g9lMMQYrOcAbCbpLfQ.webp?r=407" />
          <Card NameMovie="Madagascar" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5NIjM0qaoJ0jHlH5tXvq1L92m-3vSCFdewGe5m6-qqwmLMAkEeBBg0QZXgwOrBRYp-JAn99LQ2hQVH6Uxh3Nk7EPg.webp?r=935" />
          <Card NameMovie="La mascara" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUPQIvs5IVsUGfduKosHr_qc_dAystGHFozDLQgGZ4zH_5qIp8wELLc_zIyL054VTp3_AxytNEUEgIlASlWTr4TYZzI.webp?r=9d4" />
        </Categories>

        <Categories CategoriesTitle="Documentales">
          <Card NameMovie="This is it" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR88l6M8Mn8exKPqr6IpNXURXOw4q29Y3mhn8AxdKMe8JuU6ctdZxUhvWeWu6p8_UipXHswtKls5zfAJscNbwycTdIk.webp?r=9ea" />
          <Card NameMovie="El secreto" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWaV595s5HnbYSuPcW0UqCrUe6yaX7u9lSMGaWyT8FoovtpUhRK6cQ6l-jwS_-eUbIVOmvIC7S7923Sm7MVXT1ZowJA.webp?r=0e5" />
          <Card NameMovie="Gabo, la magia de lo real" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV4IKVXl0Tt-2xawsei6Avmacm-KPZG-StkpeAjAj8NLB0TREVe7nXsi5QMQdorwITAx4KcJ9IE2x_dOvCh4Akhjit0.webp?r=099" />
          <Card NameMovie="Sanz" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZf4I3jMNkBQ1YI-3DeWZ_NFbRI9U-lkcqH3WEUzLg5uCfPUjzEvXsc_frs2Slfkr-qMagl0sHGsdvdlyo4VC2-Mvqw.webp?r=fb1" />
          <Card NameMovie="Terra" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYji0W9FB8ryi29EZCHCbiojqXCc-DfFyYaVuSXj_NKGA4QYzcpj0ZpQ4t9giIwg-cke0OmsxaLkONNuXG0ttnCdPmg.webp?r=065" />
          <Card NameMovie="Tomorrowland" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdTH-iyme39i40goVaWMXcXT5Gov91OmjOWgtGGMCmJu8qswLejiHwKjmQPjsrjoCYoGL28O380WpALXYXKqpazeDlk.webp?r=0b2" />
          <Card NameMovie="El caso Benzema" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2YEox_9ypeYsmuLCy9q2ILUtyKJ4ODUjbxC5pxGg9Ne6NY3LV28Rg1mG7MXeQbYsqYk_67MkBL-KDF5WdEo6LhSRw.webp?r=71c" />
          <Card NameMovie="Hitler a career" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe5UDqCgsE_d-kAXHjv-Pi-_ciT3dFv_kwVP0Y0-rPXDl7eNul3QDYMI05NIFD8xLHYY8Sx2Kvv81h6-I6fWiZWFUk8.webp?r=4a8" />
          <Card NameMovie="Whitney" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdQatCoxqA_p1XZN_uYRgVWMpqxetOuxPFaoIEgK5-R8KOQLaJCTt0cSjNrF4d6hklXyerkwELNgDSlQQEaSLwZI60M.webp?r=d25" />
          <Card NameMovie="Born to be free" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe7bewhxwRPTa3mBcFzX3JCr6-15M3ScXq2yVu26dPN1C85kjWGlz-wL6mWqoLmsaLCNPOnagswpS-3IFYkSVmZXcnI.webp?r=caa" />
        </Categories>
  
        <Categories CategoriesTitle="Anime">
          <Card NameMovie="Mi vecino Totoro" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf6VBsc05XQD64v5jAIGV70KnfgWvjIW7Cd8gIJAQCRU9UFIfhfmXM2CMCDi9xaUgB9O4oO0Z7W9fB6t-TmlNR6p8wM.webp?r=b1f" />
          <Card NameMovie="El viaje de Chihiro" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZt7FksRYdCe9ecCFAi7kRA5egb1UBQX1yrySCPc9QN89fe_M9G8MIkMBPcT8r-s3vCGqYoZV0Qh9pQca4E7Z1ZDYn0.webp?r=020" />
          <Card NameMovie="Naruto Shippuden" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc7Hj5AFl_8UKIDQ3z-uzU4NnBWWy4PG3i-sfQQqYN617_9B1OX0t0Atx2j_i8wGJT1LGexbaVAkSX6CXtH653FnqbM.webp?r=f61" />
          <Card NameMovie="One punch man" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZqzDHaUti005luue06dM7jy3fkj80xgIwxS5IJ_2-CAqfYc9yPsxXxPLB6oOYDYziUP2E8zU11rwk71rhyee5fWILw.webp?r=aed" />
          <Card NameMovie="Naruto" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaJGZoK3F0vIveXEFhrQhOlHoxht1VmLPzFAbbBBcpZ9QWjhnLkykP3nbdR7iPZtKVzv9D2i_yzwHkI0uD5j1fJZFQ0.webp?r=256" />
          <Card NameMovie="Pokemon" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABabe_lpl-8FC08i13UGTjgETwgrb6la0B-oEOIYhRCG_oa4Lglg2WjBOJ9CXlTIls9IJwfgkn51X_QX9REfOYqE6XDk.webp?r=686" />
          <Card NameMovie="Los 7 pecados capitales" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXDe1lLbwC_2D9rjRP8WNQKuOY8KRz_YuwNGNQjZehSu1fU88pNoL_n0MuDuXB3w95-d4fNr_XHfewF4AdA51vptjK97oLLxLMR6uEoo0kE-Z9FXyHvzfBULNUMz.jpg?r=2ff" />
          <Card NameMovie="Sword art online" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABddWDmMGOkEflfNpGZaGIeMiGOAZJE-g8M9ToZkO5h2ykUWfKwz-6M9Yvl2xy3swZj50QA5GWMrwmEDiz1itHn-2mFc.webp?r=ced" />
          <Card NameMovie="Yu-Gi-Oh" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU6ye4JQUXYZvTe6E8nTTDXueakORd1k0ouR_C7BwahJMRHFnMgy28feebc0mmojpKogSVdgmzlNfTNLZmUNjv19W-8.webp?r=3ac" />
          <Card NameMovie="Death Note" url="https://occ-0-3012-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROk9guKHYCywreWud_7HodCvq6RdDzUD9jDj0htgL7WWGte3Sl9qVD5U2Ygp_stX4uTKHGikzt_3iO-PmzHIugdYZs.webp?r=6cf" />
        </Categories>
      </div>

    </div>
  );
}

export default App;
