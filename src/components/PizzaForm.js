import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaForm(props) {

    const picture = ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUXFxgXGBgXGBgXGBgYFxoXGBUaFxcYHSggGBslHRgXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKUBMgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAEMQAAECBAQEBAMFBgQEBwAAAAECEQADBCEFEjFBBlFhcRMigZEyobEHQlLB4RQjYtHw8RaCkqIVM1NyFyQlssLS4v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAA0EQABAwIEAwcDBAMAAwAAAAABAAIRAyEEEjFBUWHwE3GBkaGx0SLB4RQjMvEFQoIzUmL/2gAMAwEAAhEDEQA/AGaNoyMhdMrZJaLdLVXYxRjYCOmF0Sj6Y8maHtAiTUqTu4i3KrUqcaGCB4KGWkLmNcGmL/7j9YgeLmKp/er/AO4xThKbptZHhaNFriBcwx0rlLNntFOnqT4yVA3F48WqIqIOoxx0ULrGEYiJqA9y0Wp1DLUNGPSEnA6woLPDvSVOYQWm/MIKE5sKhOwM/dLxSm0Kk6gwz5ozNa4eLGm0qklKKkCMywyzKGWrZj0ijOwc/dL94E6kdlMoKURglRcnUa06gxXUqBm2qkKMoiNSInSh9Y2KBHSuVPII0VLMXCiNTLJjpXKkuXEJl8hBD9mjwyDHSVypGRzjXwwIuGTES5XSJzKFRXLePMsXpUoksAH6kDrqbRuuQQ+ZOVixzWv+fpEzurNa5xgCULUBuIpz6CUvVAgrUTkBst+dm7NeIBPSxJKQ3MgQL9UxpsfdM/oK5ElvmQlur4XQfgLQFqsAmo0DiOhgpVoRESpcNNxBiZlKPo5TDhBXMJlOtOqSI0jp0+kSoMUiA9Zw7KVoGMHFcboRpnZJIMbAwcqeGZg+G8WME4Iq6hVkhEveYv4f8o1Ufl1gzXh2irlKXHjI6Z/4XyN6hb7+VGu+0ZF1fsHJ9jAY8MaFUKIikePIhClHYxImUvtEKVvmjM4jwU3MxKmSkdYrCmUi42GnL6l4GKXBfihLTi24gGtULO1KMFqpUQqVHqlRCoxIUStZqolwzcxWmqi3hiPLHO/iolFJK2IMNWEVdtYUkwYwqa0DaYKkp3kznEShUCaOdaCEsvDYdIQSFZCo9zREDHuaLSoUrxXm0iFapbtEoMZmiSVEIdOwn8J94oTqVadRDAFCF3G+KUyleHLTnVe+qQRrYF99e+rQGpkaJPoi0qT6hhqjIiKasJDmA44lmKdyi+hZgAH5B3NhqYIYSr9/J8ZSVIVpZw5IylgbuQzdekKmoCQ1u9r6JxuBLb1DYcNT5gfPIraVNmzAfDkzFD8SQ4HN7Nyj2lp6g/GkAX82gYbm9v1hswopSAnyg3LCzJzEguTdWVtDz6QOxotLC0KBQoqvZ1C7Xe7Eq0teCvoFjM73kwJOg61vvzV2dm9/ZtpgXgEyeO86+nJLsqsBLKSQRy8w9WgxS4auYAQk5Td2d+w/m0DcKq1JmBSkEJZgx17i3LSHHDcUTNzMAACwGha1+kK4etnsXCfX025woxuF7My1sDvt63nxUFBgkoXVLJP8ZcewtFHijD1F1JSLAvmCSQ2mUs/zgtiddLS2dZA6Zi3U5YVMZ4vBOXOGFnAUyvWOqVXBrqYudoI9QNO+83tZRhKDnPFQCBz08OP2tNkp10ic10ln9/TeKhpVhIzZggq5HK+79YcKKqTUMyHGrhww9nO8XK5WRGQJDu19ybuGuoBiOhteKYenUcycsLUqVodlOqQl0xFnjTOsHctswGt7W5F/WDNRWpUFJWhB8r3ACgAwBB3AZvp1GzKi7snV3D8hZrA+wgmUAX9oUh7nH6duasUFeUHzgkPdz0IsVP0ieTiErKlK0FSgSXBYn2+kC2K+/tfvtF2bg02WkKUg9bP8vUj0ic0tibDrvUGmwkEgA+AVlc5KpiRLCiCU2YHUsp2L2F3HKHSZWBCQEsABYQgYRhcyYVGVMUGZJuyk77MU9oNYjSz0y3Hna1iH5XOhP1g9HEBv09eKTdQZnmyJf8WHOMhH8Wf/ANNftGQx+oCtkprpOH1KZycyVg9touSpYSX1McowGvUiakpJCgQ40zc46uhbgHmIswkiFj1GwZUhVHjxpmjXxRFlRSvHhMaMo6CNk06tzEEqyBY1hHirC1LyjSK3+HqdviJ9YaFUySGN4oT8HlHQEQMt3hWDkvKwKmdsxJ5PHk3htH3ZalesG8MwZKJwUxVt2hgmUhc5AG77wu5z8+UBHYxrhcrmE7hOeo+WWEjqqJJPClWmwCD6/pDdiGMmXN8Nk25XHvFynnrUnOEpbvr2js7iYj0V+wgSfdKCeGanfL7/AKRZocAnpU5UluV4PzcVIL5Tl3IvGyK1MwPLvz6DrFc0KewI1CrSEHYgtFlFYRZo0mV0pKggqQl9THk9dLtOSVONFRR1dwnLsrNw43B9Vbl1b6giJfF5RHJp0LByLBOti8b0inOUi8czGGQHWnToKjsO28bKUKEbBcQ1UvLqbc4rTFsHBsLmGO2jUIXYzoUI4xx4ykiVLutXxMWKEnf1eE2nzboZ38xtodSzn5CN6usmTJvis+ZRHMBvYuLe8F8Ow7RS7pBYk82BAfQHXzFxppAKpL+jYefn+Vr4agGN7vU9aKlSUrl9u1vnBtaR5SCAbXdri5ud3+cXKjCky8pNszluTaC9yOv9zAuU21tuTc294z3tex+V2ycljm5mLKqomqUXWoi+gYXGXRmOmrQbpKCbPCSr4UpAFmDDQJGkXsOwmVLCVHzqLEgjypcaEHVufyg0MQSBokbAQ+MEXXrOOXcXM8JPLhKy8R/kAAG0G348O4a346eF0Jk4AhwtalE9WYD11EL/ABRLEpTSlZQQ9rG+um0F+K8e8NIShio3fYDp1jnVViSlk5tTvC2KFOezptFiDO89eHBM/wCPpVnxWrOtEAfjSF5NrFrcZlL2OZRa3XkPziWgolrGYJIALEgCw2YqNyzmKyaJ1BIIJN2BcP1J0hi8FchK0KuCWyqULFgVHymz2B5t0i1MM1dMfdPvgWZEnzjooWqqmoHxKZ7h9wXAYaEb9Ypza1SyVup2Ick2KgxbW/8AKLNYQpyfm4uRfmWf8ooUkrzAuQxcX0I0McH5jMmFJYANFH4bLBAKtbt8SSSC511fUxpJkGWvMoAt90h0vyUA3X2YwbRPSLNmvd/Ua+sQzJaZilKUkAC7JO+g/t1gvawJQXURwUNJOpVqdZUj+EAgBtiSS/eGiTTywgZVLYAnXM/oQIEUy5WVKcqeoIBNupH9NHlVjCknKB5bBTDny6WgFR4ccrb9cdPZLODz/duvFU6ufKMzPKUqXMBYtZ9HGxPYxLJFfO8pmhKSGDgCwu8UK2bTy5mZaJikkfdKW7i9x6wXpOJJCiUAqQQxGdKGUCAQMySW7H+cXpsfEgWi8gW5IVV4FlB/hCZ/1z/o/wD3GQZ/bP4vn+sZBM56hLZyk6RToF/ESFDYAn5w04VjOVIzrCkcwLjvC8ugWgugFSTzTpGScMqFEpSggHkLH8otTqCczUWowEZHroNLWU6yAleYkP6QRSpOwhERgpoiictRvY3sH6Qz0tXmAI0MP03kzKza9JrCMuiL548ioiYYnTF0BbtGuWMeNs0VKsFkmrlS1Mpac7OEvc9WjxNciYlSHAL3I6wh4zNX+3KUmWVZQALaEjntB3D8JWUuFMpQclR+E72GphZtZwqG0gDRaTcKwUwS6CYK9xTD5QN1AKBdk3JHWAsk1EycZclwgfE/0ENdLgiEDPNmn+cXgmTJGZAbN94xSiTVq5jDRrAN4PFXrYlrKeRsvPEi08v7ShWUMuWbqmJOpF8vtpAbFMbWk5JYyvvp6w04rNdTHKpKgXU9wdrco1reHUVCJYAQlQ1UNSNn5xGIcwuDDadvmP64oeGrFt3+Z09vt3JEUhSmKiTEyKY/dhhPDFRLJSEg2sY3GHTJMtU2YlgLklm6AQmHEGI9CtbOx18w80HwuvmyV+S6zZhB6mxBS1PMnZFkgBCBzBu56sPWAkjEQy1oShOc7u4TrrzN4v4c97JcMtSn8wSCLAg6kgWgzgS0Ndpw28kIw8kjz3/paTuIajMZay4QojQEEg2uNYJUOIrmS1pCTmCVKcAsAEkv09YmwXCEVE3L5tHVsABZ1buXAYEQ3TRJTLmyE5JYyZQdHezkt1jqNJr2h7jY2HO2moAQcTWZTd2TWydeESdbXOq5hhssovl1IZwdS5JKhpsOd4aMPp0s3h5mfRRDghwGdmdr9IJS8MKCHloOUpBJXYJdirvZVtbj0p08goPmUwc7kKHIWZyx7c9IuadRmUv07vkb+kIjajagIYfXXyO3rM7o1T4egpOazJDpDqLl7la9b3s2m8A8aUJZQQHL5tLHRgG1/WGeRLUpTrIDZtyALWD2BsTZyB6wHrUomLAdK0o0IIYn7wYBjcawbGgdlax28+uXclMO8h8uMjfyI18tb8ygpqJ8zzXSD6P2gphOETjmVmuR5Xdknmb3ghglIJpMxQcAskbCGUoAFv7xGEohzO0cSQdOMceU68QlMViSCWNAEdeKQuJMGXkQM2YpSXJ1J139fpyEJC6bV8zjS1rbc47QuWV5sybdWvC4rh5eYnyAEvdi3LUXgOIwjmuDqQJB5aRA3I909gv8izsyyqQI9ZvskCikFw9rjW3u+neLc2duolXW/wBYbDwypQJcA7sAA3O0Bq/D1S7DsCf13hF7Kjf5tIBWpTxlF5hrgfP4QCdLcEgH1BiGmqlS3ynLmGU6aOCPmAfSPaibMUrIlyroLXjKbBVlV7nfvFmnKJmPdHdkj6uvNaiQ+pOug359tovZvDSEpYPuQLEi7PzZouzKAhLktzfpA6tnSgHStzq+Us/KIzVJGqWdWa8QNERpMJWQFZQ76jQ9Yu/skweUJBJtoOli/VoJcLVEky0vNlhbElOd30u2sGp9KhwQLq5H5wQYZzgHT4d6yXVy1xDh3dfCWJCMoIIST0QAfci94pzZSAbS0uSA4SOzuBE3ENDU5SZCh5bkbkcmNoHYfOWUnOCFixGnbt2hinR+lDe/gs8f+rxkQ5lfjV/t/wDrGQbswqyiyuI50tISmUhSdCesSDiNJATMSpB5gv8ASFcV7hnDC/eLlKUTGBIuw/lAmVqgIDTbgevhaTsJh3f634jr5TPMmyqpHgDzJNwrUgwFw1UylnGlmCwfKe9xBukp0U05IlnMwu92eK3E+FeNMExKyFajvD4zOkj+QMH4WVUDWHIT9JEg7zzRWWsRYQqE+mxCbJUJc8M9grYww09S8XmUq5kIiYwCF7iPEpksJCCU84FyeLpiB50g9dIXdiWteWX69U3TwNR1MVBHn0EyYhQ6lNiohzzaPGSmUUk3OneJKeo8UBwxYFtde0EpWHicpGgSm6u8DFPM5xZqR18p9lTsqTRVNh9tPhC6iXNRKK1JCsocBT/MQjYzxXOmHKp7baAdhHWMer5UtCisOwI78h3jkX7PnmksyTbMU7HTWK12Uw6AZHfqRueKFgnuLC8tgza2x2Eocmtn3ub+sG8ExNSMqlKUL6B7enKIpGELl3StCw53v7RoVO5t+sJvyg/xC0G/WLmeSf8ACa8TkE57pNxoSNYUuMMVTPWmRLzZE3U5PxHQ/wAQAiDCVqzp1AcC1je2sa1dC0xSgELClBlOStOVyQWsCdCL7dWNSAcMwaARqeJ27t0vVpNY/v24cfwqdFJypuCzjUN2A3fQw44FR5kplbrWc4FmQgBgfUn584GUFMr4jfKkHQm50v8AMQwcPsieFdcr8337/wAoiq8NLSdyB5m58puiuEUnRqBPx6wU4YPhkuSgoQliQ6juTyfkNIH4zI86SpQRLCbn4m3Iy7klgBu8EVVNixv01tA2vW5TOSh1Sy4zB2NwFMHdtfblDdVzRSawC1jygGduG/GdViYcuNYvcbmfMjn5TeOBSvXV0wrUCkouzWKgGZIJBLEDbUEq7QVw+VMKgVJlpQlv+YkTCSw+7sd7ka6xWkSFFalmUkpIYPtzIS1iebxDV4tMQdklPlFtrMPl9YUa8ZzUeSRsPz3cD4rZc4BoZTAkC559177XBTZLny2KljOp2/eZfKAwKSlIYbnTcQBpJviLmGz53sNPT0iDDscR5hPS5JcKBVlvq6du8X8LlJckWCy4/KC4rENqBoYZ48eU+KQb+214cDNo4c429B3I1g0rKC4YA2/OI8bxyXTozEjoNyYmrFskB9BHJONq3xJhli+Ugu/yEMGoaTA0cNbW/rTwSeHw/wCpq301MeSlx3jefO8qFZEgm6SQT3PKB9Pi80oUDNXqFB1EF9GF9IDmiJTa279IvokFgwJMZ9U5tTJW/TpNZ9LWgDrx80Yw3iifL0USk7K83sTBDEsVK8pKmfzOOqXsDZ9AwhUCTE6atWXw5j5Puv8AdJ1I6c4plmxkgXiTC51NgOcAT15pqwijWn7yVkgM2qcxc5rasfrFyppfCLANz3gDgeLqRlY3AI1d2BY36fSGCfi4WwyEqOvV7Wg9R9HKRmgjT8c+KXIrE6W306j5K8XKSiVMVMVmUbZXs3IAM/6QKraLxQlEtCBLU7gkksSGK20azDXtDNPwxJKQ7qJFztYP/KNaqhS+RKsmX7wHLQDme8EbiCx2VzYaLag31uff15AaWuFjfusBpp7brmNJh6kzvDAGb4Qoc31c9I6gFMhIJBUAAovew67QMpqCXLWV/EoqcKNmB5ci8a1E9SjoA76af00K1K9/RFqNDoDepW1ZVMssXuSq1r6CBGI5wog2BZu5vBijplqLkAJ1vu2hAGsUMVmAGxcjc7dhDNKwJ4pNwvAQn9kV/QjIk/aV/iPvGRftG812V3JBZMtJTkMkkt8WYj5QTwXCfMxchu94bsXxKTKOWWiWf4mB9oHDFVEDI4LO4I+kJue0OgukbwPz7J+mKzmB2WJ0kq5Q0k0eVMsk7k2HuY1nVZB+FKiNU50pJ7OYpUWL1EtV1FbfijSqwcTiZ8pd/vIOgg9My3LRJtNrDxBgzz1KA6gA8uxEXi4kieB08NlNP4gpl/u1o8NfKYPodDGYHj1KZ3hqISsOwGhbTpAbEcMIS60EAbG49DtAVEqWiYJhT8NyPxAbGGW4h7ozCCgVME0NJpmQn7iCRKMlaip90xzxKitQSBvqdP1gxV8WftKT4cksiztb1MAaXxJs3L4gRqQ9kpa5itRhdUkDu2TGFqFtGDouq4bJ8OUCxBsGsHPUmDKVyLJ8UBQ+IC+Unm28KGA4gmspjKCiJiMuZRu9yMyBztFqgwdMgMTnWTmUpVk80hjZ2g5phwGYAtPWlkLKHAguIcDpG3GeH3IRXF5SCl1TApL3YfDbe8CfEkKDZ0KCSLbltrX9ooVFetOdDAhSn7Mfk+8R0daqXUeMmXKKFC6XTmQOY68xCvY4eo+wHPXXjzvqLor8PVpMkzOo0vpblvflxKuIk0atVFKiTYd9GPKCSsOo0ICmvyOsJPFWKy3TPkTAJjmwOgG52vtGkjiSatAEyc4I0IB/KKVaTaInKDa1vz5qKfa1TDXkcQSugpopSJKpqUJIyku2zG8AKmSJh+JI0VmSkhTJF3u7gaDTTpFjDcYnGl+7MQBlKRqUm3m9TrEGIryS0S0IR4igMyhuEfCDfVyD7QbOxjLiBE3t5bett11GlUzmTLpgXB07+HkdgpkzgoFKPKhDMn4r2ygqZnygBtm5mJsOnpGa4dwfWBZkFgh2bcW7xIZQSwGoEY9XEdqczhp5Jx4FNmQHXr1Twvw1IQVZviBdJY217jpFuVOSAAgHl5oAyqhpdOObg+1/mYKT6hKJZWdo3mhmTtNNJ8gV52oCDl7/AHKgrKtIuC46Qq4/i0iwJAzaHqP6+cLtSupneLNlJWJRUXyD5rKRdRG8C5VMN/nAXNe8Q4xK0qOHa283CNnGZSXZKlmwsPLbUh4euHlGdTyZjBGrjVsqim3oI53IkDa/aOi8Oy//ACkpIOUkqP8AvVE0sMxgJHL0IPIKuLdIHf8AYrTjXGBIRa6lWAHzPaOWipSXKkrzEuS4LvrDnxIvxZ6zsnyj01hdrKYAiL1WteZKnCA02gDfVRU9QkD4Pn+kZ/xSU/nQw+Q59YkTJYQGxKXYxT9NTOycdUdqjEjE5E4sgjy6sq5HUK7QQFCFyylKgoWbNqNSQnprCjwdTA+IT+JvRnH1MNS3RdJbtFKmGcScrvMfEKKVZxaCQqC8JnSlJUl2fTZrWfrf2h1wrDisOzWHpCbPxlSHUsBTX5aRZw77QpQbOmYgh7WWCD1/SFX4Z5d+4yRy1Q69UxAMFPqKdb6uORt/eLiaaW1wX3hIR9o9MLCTMbnbfWxNosyftBplhssxPcfyJirMMWSck94J9wlC953jut90z1chLhKEh99IsUWEoKXmJvqR9PSAVHxBIT5lzUJBuHUCW7RTxn7QZKU5ZWZdthb3MM0Ozu8s/wCY/HqfJAeKh+kHxV7iWtSksmzBgBCTideEB1Fn9z2EB8T4rmrU4QB1NyPygNMKphKlEk8zFmYZ7nF9S07JjOGNDW7Il/iA/wDT/wB36RkC/BMew32FLghZ38U0zsSMwhuYftvBuhlqLZFZgfS3O8K1JTpCJagSSsl+Vmt3hqpqoJSPDDbKOjDoecINw1NsB1gtl1dzxIE+yv1tOEAMXLMWck930jTDKoSpqVAOPvDZjr67xSqK9JUAsm7fC7paNZlRdXhrcWPU8/aBVWie0p2jTw5K7WEtyPvOqfMVCFoIYKzDuGMJGO8NiWjMVAHYHQjYA84OYHPEwoKjYNmHNtoGcaylVVWhIm5QRyskAEn3aNYvbVZm1mB589Vi0WPo1CzNESTbhpbTRIcqoVIKkh0hXsxiBVUEB0l1H0sRcHnFqsSCrw1bFgrfofWA+ISFS1ZVA99oADmKeeTTsfRdL4LWmXIQopQCQpQYjzXPxdoMpnJmJK5kwS5eyjYKI1CYR8EkKn+HSySbq+Lk4Gf0YPDRxbSqVLEhCQ0sBAYsDYNvrA31iR/8i3efePLvRWU2h+UEBxvPAeNpOnrBUqq6R4SkycyszpKhcq79IRsQoyhfnWpyNEWDHYnU+kEaWp8DKjKlR0c/dfryePJkkzB4irgnVI0AsCPXaIacwBYdLWEddSiOaWTmm9zJmT1+FcwHCaNSFFcsKUwIzZjl9yB0ivimB0xQpaGBDWHlChcFg+tozBTMmjIlC7EhQ1cg2cOBp1i9i2FiVqrVxYWv9GtF6zngAwI019fBDp06ZMTc3j8bdyj4TmLXMlyEZgjNmIH8NyT7D5R0ZeBSvDzJBKjqo3JA+QDwD4CwjwE+YHxJgKnLghAy5Uttz9uUN1VMCEhIi1Ogzs/3L9+2nHoLPxuJd2kU7Rw38tfhI1fIyqNuneB82VOX/wAhOaYLXLJSeaj+UGeIJuQhTOWJA/M+8LeH4zVycykyiUhROjktq410jJ/TfuwJiZPXNNsc59LOYnaetkYolLlU9OmeXX4+QkEEOVPryj3iXHDKpAoocTcoSCb+cKUr/baPKKmXUS6aZ5VIVPVOJSbJ8tgX0OcM0acbUcyZ4XhsUJCiqxckkANZtE/ONN7XNp/VykabR1wS1NtM12t1ub9xJ97JBVxGtlBPlRoEjS/1PWI8Lr5ufOpwliA/3jtlfUweXSoSAUgAscoJFz99TMPL05mAtRSk+ZZcvY79u0BFVm4F/GVpObVIgHw0TbhXGqsuQ5RdlC9xo4AHlPreHWUFLTIWgpb4y9iUqzHyjnprs8cZ8BSQ49v61jpGJqMgTJiVZfBopMpJ3C5iyxGzsB7QVmVzDNwCPS49RKz8RSLIERM7a7fcBKuNftMuYbsVF9LPqdRFWmrZilALbW9mIh1wnFZVYjwpqEmeEuUn7w/Egg3F9NoDVPCUwGYpBZCNVFu/w6xVxLf4kkdefONN9kzTq0nWqANOn9flV1y7QFxWnUoMBr8oOUkxK3SC5Ta9nGxjdckDaGmEOEhUdIJadUu8PSvCm5dlBvUXH5wfqQQNDFGqp2OYaguO4g3TLExAWN9eh3HvF4QwYslDEaRazcMkbc+8A8Ro8txD9WSoW8TkBi8cCVSo2Us082ClCoP6RQnYcbkaxcwmoSgsoX6wQwUn9QN0Zk0j+YjsIjnU0WhUuLaRXmVA5iKzKI14FlTm0wMR0ctlFPqIIJUDFefLZQV1aOUkjVS/s0ZFjNGRCiUBwzEMpY6jQEm3O0FDxAyW1hmx3hVL50+E1yUnMGO+XyuR0+cD0YTTpSMwlEnykBKja3mBtlVZh6mFqppyM9vEfM+idotqQchnwPxHql2oxh1AiLtBirq1Fx6ReTw/T+byqLu2wSNst36XJiOkwGSglRQrWwKnHy19XhSrWw9wOvOE9SZiZBIEd6aMEqkJRnJAtfZ+TRXxGoAmqKDmSoWUGsWvYjvGlJlLAJJGjAWAi6mgAAKkgn2t2EAoVan8WN3nrruUVaVNjjUe6/BKgomXmmaks2lhyENxoU+EJq0JKXyqBH3XAB+cEU4RTzgFKDLHqLdIs18jNITKStIUDd7Ajlobi1o1qdOrSJedhb48llVa9OsQ0bm+vn5oNTIp6eYmZKQxD2SbFw2nrFzGa5CZCpktict1tdy7sToRd94r4lgU2XLzLICQzrSfNcgFwzNvFDGZJnyTTylJEqWQFFLebKxsQL6uS2pgTy5zjIjwG++vL0TFLIA2Dm8dY29YjmlTDZwmrVmILXb8XQR0TEJEtcpKJaghLJLEOcwFwOjW31hDwyhRKnN5VgFs3mbY2GpI3EOmGzgtC3KCVuQkuMqRby7aB7RaiGiWt3+3WyPWc58Pdt942O45/dBP+LmnlqAT5lqPmHl8zjTZmIHtDrhtHLRJ8eYhzqhNvMXASb6kk2iDhjBZU0meuWlUtIZOYAgqBuUjTKNOpflB9NOqpV5klMtPOznZu2vcCJpuEgOu4i29v/YcPvuksTVjM1tgDc6f86yfttqswqeZgVM+6DlQeeVwVDm6iW6JBiNcw5VOFOFEebdt09DBRclEpIAYJSAEpFgGsPygLi9aESlzCbISpZ/ygn8oI+7xTm+vXWyzs+b6gLdfZUV4rTJUQtSMyRlLttqPcmIVSkqH7ojKrdJdj029I5XKxQqfOXB15udfmYt0telBGWYpBtcH+n9YXOLeLOb5dei1h/jR/q/z06811LAqIyJaZflIKlKsGuS5+ZMV8SrViYpKGISoBjzYaRYweoJlSFKObNLzlTNYqUd/4QIXZhShSphUf3yiSocy+Up5HZu3KCOqAg3gfgfI5cUo2kc97n7z8AoPi376omL0SDlS2jDVu5cxUlDMAw1YhwXAaziJa+aJcpxza+2u4gQMcLBgHH0jNqUqxMuGui9EH06bQ1p0RyhpCTKSpipSkpLWHmIFoZ+PSMmQWMyYCeolpYfNQhN4NmrnVsl3ZKs6uyAVfUCL32k4rlqpSL2l5i3NaiS/+kQzSpubTc3c/ZZteq11enJs0ep09ghVKlcuYhY1SoEbe8dZpadM2UQAP3gC1kdh78mjmmGSVz1J8mcK0blor0F7mH3C6wIlJQArOkANo7GCUqZAOcT9+628oWOj6XM1HpwlBJXCypNWCXMlQVfQpJSSH21iAAKfmCR6pLH6Q5ir8WxfVztszWgbWYASR4ZAYqLHcqLmC0y3/QWmPG3tr+YkDsRnM1TBgd1p9TolKpkxXwyZ4ayg/Cq/ZX6/kILVKGcGxBYg7GKyKcO7QwrZpEreplWgDMkZlty+sMYRZjEiKNIu3rEhqoXpVm4f01gPiWH9Lw9z6cF7QAxeSwJiCIUyHBAMNGZLF7FoszqINpFzCaMhALa394tz6e0QLrgwAJZmSCLgkRoapQsYNTpMUk0mdYA2ufyjpQ3sC2zGPIu+BGRVVyro+MUjKQpazmUShWV0pYgqYJPV+T/QRKwpMsnKrMlWr3aBicRXMIK3DWSH8oYB22Krud7iCFFTJEwzQVOQHGYlJ6tpCzi2sScvcd+uXjaUSq59ABod8a9e2ysLocgLC0IeMzJkuYVEsCToX7Q9Y9i3hy3Z9BCljUlM+USnUX9Ys3DUxoPT8K1LGVRdxQkY1MYspuZENOD4mSEAqBdhc845ytChrodT16wfw3KZfmIAA1eLCkxpBV6tY1G3C6QidlUoAjZi7uCH94Cza9ZlG5Kg9+sCcGmLBypPiAmzB1dLDWNMSpq1IOWSsuu1hdO51t6wWoXOkNslabQ25T/gdd42Hgzy+ZCgQ+xsf7wJ4SwYzZK8qikIVMSFKD5ip7gslxfUQP4dlzlCXIUFJKnCrBQSl+f8ud46bRUiEISmWnygADmepPWKtZ2rgHRAHXvfmjVXfpmy0mXGeQHj5ea41O4QxNCgBK8QJ0UlSSC2hUCx+UHsH4DrJy5YqTlkgefKopUw2vz66R0KrlruQ1hbXX02jbD5837xA7Av8zBXUmFwBHxZAGLq5SQR6zoiwlJSAlmAACUgaACwAiRKGBJsOWjCKFZikuQnPMNyLDU/oITcY48KnSgJA9zA62Jo0nQ8y7gB77DxuhYfBV6wlgtxNh4InxHxDLlkQvcUYmhVDNmC6VBKSNHClAHTvCvXY6VrJWlw8ZXYlKXQz5SSUqISpKTqcqkqYc9DGdh31DWJOjvi3P1WnVwjaTG8QR3apfpjJNmUl+Sn+sR1dGwJCgW2Nj+sCpcxmi0iYSoJO5AubXteHOycDIKK3ENOy7HjP7nD/KCkIpRLTzdSEpHq6jC+qpSqmSlXxKQkjosAFJ/nBf7QqhMulRLL5VTJUs7nKjzn/wBgv1gZOxCnmAKQRYM2hHvC2KzNGZvE9fKUwzhlEjoae5SZitSrKRzIURexAbfTfSBclYhsxjDxMBKLsH/M3hVCCntBWVe0bfuTWpkJ2+yqneqmFx5ZK7d1IH9d4ZsMwSVUVdVUTkJmBChLlpUHT5UpClEbl3gL9kUr95UzNky0p/1KJ/8AhEfDnGkuSqciYFKQucuYkpDuFF+/94MDlAJ5pSo1znvDeAR9KZkpSmohlFnlZQ41skF/Rojk8TSVsCmbKIOikgOer3iGo47o3tMUBuChR9rRtL4mkTUFSTnTpdD/ACVEZ3bk+h+D6ocbFvuPS49EVoq5AW6VghTljY6PaC+C1Bmys5ygubAu1y1+0c8qcakLSJctkqd2CSnmDtG/DeLKlKyKVs7cxckdw8U7Qz9Qt5HvV34ZpYcp+pHvtAnyJaApSCqYq1iADuM3P6wm0nFSNFIUOoII/KBfEuMLnzSVGznKNkjYDnA0SRoYPnOqvSpQzLvvdPMnHaYlvEAP8Tp+toKSKpCh5VJI6EH6RzEi7AQaw2aZJTMSDbb6vHdvGoUmhIsU6qTAvF6Z0xYw/FlTSfJlAGmrxYmJCr6iLio14sqAFphyqfs2UADYNGs2TaL1QNIxUtxBIXZjCWq5LAxZocOyoD6m57mJRS55wTsPMfSDq5AaKgSVD3RZAf2WMgr4UexORVzrns+vv4VjmUE5iWACmBvt1PSGKimmnQlBJyiwA6coK4L9lxQc8+oAUHZMoAs4IuqYCDr+H1ghXcMSLZps1gczeUX7tpEOoEthLGs0u1S7i2IJDBQcKIYdN4pKqglT5WTz29YbP8M00xmzLWhL3+BjcXa5YbfK0UhwkpWV7sNLi3JszOYE5zmw1ok9b6ItNtMglxgBJmNiQs5ZS1EFiTkYPuwfSK+F4Uc4CiFB2G2thqCxjqeCcJyJYX4klKidFFiQOQQzBubmNZtLSy5xIlGYpAYJCUrCNGJQAL9TFXMqQJcBPHVHZVo5rNJhXsCoaKlQMikFatVO9ze52ilxYlS0+V3FwRt7QLraCYqcFyl5QuxBBA066dukZxvRVVOjxAkFCUhJWGdIZ+7E3iKhqNaQ1s92niTJ9FFOlSdVBD789fACyrYYucgKWkkTmYA7A3UQ+x09YecE4pSpIRMQQsC5HwE8xvu7dY519mWKGbPmKmrGVCbZrsSFEkciw169Ye5NChIUpJSolIIzJByILNfd/MobXPKOp06rTmDo4jXrXrYlY0agyuE8DpxH263Z5cvxA7hveKNW8p15rJ8xtsNtd9Iq8KVqlpVKU4CffLt1jXigoTImBOtvxHcEv7Qya37BqtGxPiPgrPGHIxAouP8AsBpsT8Ln/EWMLnrJff8AoDpARdM+5c8vnEqlHM7Btoty5dwogt/pt/X1jz7Tl57k7k817HKMuUWAsEuVKVoUUHXYtYjmI8zgm8NWI4XmzKmAuQPDZ8xAFtTrqb2vtCjWyDLUUrBCkliCGPXruPeHw0OsOtfhZr3Fouqs6jmFZUGuS21tonwvDJpnyklB80xA5hyoattDJwypM0KlpSFgXZQBYHUBXN9oYaLD0S50lSQU/vUWvqVCNFjczAfx+PVZD3Fjj1zUX2rzsvgA6CapXfKBt/mhORiJmTCAkKs5SQnd2bnHTOLqJM2YAU5gnN1Z2/lC2eHpXxJTlULjyi3pARRL2zvf3XMqhoAXmF10rL4asqVAaaa/UQs41IQhZKFJKSXKQdPaC8vBCVEnXS/L1iedw/bKALjVrfKJbhXECVPb5ScqvcITTJwasqGYrMzLzypSEJJ7KKzHOBiOUEJDH8Rew5COtV2Ef+kyaUBipV7vpMUtSj3Z26wpVPBy0C4BHMCCtoZ9Rogis5pJB1SOmalTAqPsfygjKn5BZag9iwLkCGJPD0sEPKHuRF04Ik/cDesXNA7KBVO5SjTYkiWXAUSdXGnWCFDjac5Cw/4VcrfKDB4dQT8MRTcAlA+VN+8CdQ3IVhVcN0Fmz5YmO76dR7x7NqpbuT1v+UEp2Bg84t03D4ytc99oq3DzxRHYl/JCaeolE/Gn3+kXaeslOAFJ94ISOEUXd4sS+FE2OhEQ7BPOn2VP1E6lQ09bKSojxMvYEv7CN5GJykKcTS27hTH5WMFpeBhr/SMOAp3AizP8flvJlCOIOymppyJoCkKChp23vyi0RFakwfIXSGPSLk2UpNyLQz2TgLoja4dZVKCT+8WrsPzi8qIKcs/WNyYq3RXcZMrMkZHrxkWUQj3jE3iuuSFODGRkc/8Ais9uq0rKlMlAShAvu9/pABOPqMwS8pDb5unJoyMjJxVRzamVpgQPcLawtCm+kXOF0VmYipNtWD6tA3GcUWlLoZJIc77xkZGfiK9Rz4J6mPZVw9NnBEwozadK1akbdLflFXHKhQp0ByU5bp2IuGjIyHseSKDCDsPsowLQcQQRuUkfZWPDmzmY5StnH4XT8xHUKZJnqVmJACdE2Dnf5R7GRoRLg06E38vwof8ARTc9uoaI5XARWXTpkpOUOWuTqe5he4Nx01yFqmS0pZSkEAkgtvfTWPIyLVBlfTA0/r5SDBmpvcdZH3QXibA5clXle7Kvs+w6QOlZWFi975jyJjIyMHEfRVcG2C9Zg3uqUGucZKhn1Ckhxo2n66wJxCWJkt1a2L/12jIyKUTvv+Qur8OtCgmGTjLmoy7KSfcx1zBJpVOQk7K17An8o8jI9HhSfrHWhXncYBDSpsSnET1D1jdEsG5jIyGMP/AJOpqvBRp13jypkgoO1jGRkM6m6HK2xWnCkU4cgJRmABs5SjUb6n3itTy3QXJt1jIyA4b/AMY8fdWfqp5dEhViImVh6GMZGQUIRKHYdSjMoG8b1eHI+cZGRwuFYkhyqTMPQCDF2jo0tGRkDYLqXOMK0uUBHqZYjIyCqi8SmJfDAjIyOVStQmJAIyMjlygm4chVx5T0/lAqqBQopd+ukeRkCrNAEhMUHuNiVpmjIyMhZNL/2Q=='];

    const toppingslist = ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onion', 'Green Peppers', 'Diced Tomatoes', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese'];

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse);
      }

    return (

      <div id="pizza-form" className="pizza-form-container">
        <div className='navbar'>
            <nav>
                <h2 className="form-header-h2">That's Some Good Shit</h2>
                <div className='form-nav-links'>
                    <Link to='/'>Shire</Link>
                    <Link to='/help'>Assistance</Link>
                </div>
            </nav>
        </div>
        <div className='form-container'>
            <form className="form">
                <h2 className="build-pizza-header">Build Your Own Pizza</h2>
                <img className='pizza-form-image' src={picture}/>
                <h3 className="form-intro">Build Your Own Za, Brah!</h3>
                <label className="form-label">
                    <div className="form-label-description">
                        <h3>Choice of size<br/><span className="breakpoint"><em>required</em></span></h3>
                    </div>
                    <select 
                    className="select-size"
                    value={values.role}
                    name="role"
                    id="roleSelect"
                    >
                        <option value='Small'>Small</option>
                        <option value="Medium">Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Xtra Large'>Xtra Large</option>
                        <option value='DOUBLE EXTRA LARGE'>DOUBLE EXTRA LARGE</option>
                        <option value='Heart Disease'>Heart Disease</option>
                    </select>
                </label>

                <div className="form-label-description">
                    <h3>Choice of sauce<br/><span className="breakpoint"><em>required</em></span></h3>
                </div>


                <div className="radio">
                    <label className="radio-clickers">
                        <input
                        className='indi-clicker'
                        type='radio'
                        name="sauces"
                        value={values.sauce}
                        />
                        Original Red
                    </label>

                    <label className="radio-clickers">
                        <input
                        className='indi-clicker'
                        type='radio'
                        name="sauce"
                        value={values.sauce}
                        />
                        Garlic Ranch
                    </label>

                    <label className="radio-clickers">
                        <input
                        className='indi-clicker'
                        type='radio'
                        name="sauce"
                        value={values.sauce}
                        />
                        BBQ Sauce
                    </label>

                    <label className="radio-clickers">
                        <input
                        className='indi-clicker'
                        type='radio'
                        name="sauce"
                        value={values.sauce}
                        />
                        Spinach Alfredo
                    </label>
                </div>

                <div className="form-label-description">
                    <h3>Add Toppings<br/><span className="breakpoint"><em>Choose up to 1 billion. You've earned it.</em></span></h3>
                </div>

                <div className="toppings">
                    {
                        toppingslist.map(topping => (
                             (
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={topping}
                                            value={values.toppings}
                                            />
                                        {topping}
                                    </label>
                                </div>
                            )
                        ))
                    }     
                </div>

                <div className="form-label-description">
                    <h3>Choice of Subtitute<br/><span className="breakpoint"><em>Gluten free add $1.00</em></span></h3>
                </div>

                <div className="checkbox">
                    <label class="toggle">
                        <input
                        type="checkbox"
                        name="substitute"
                        value={values.substitute}
                        />
                        <span className="slider"></span>
                        <h3 className="gluten">Gluten Free?</h3>
                    </label>
                </div>

                <div className="form-label-description">
                    <h3>Special Instructions</h3>
                </div>

                <div className="special-instructons">
                    <label>
                        <input 
                        onChange={onChange} 
                        className='add-instructions' 
                        type="text" 
                        name="special"
                        value={values.special}
                        />
                    </label>
                </div>

            </form>
        </div>
      </div>

    )
}