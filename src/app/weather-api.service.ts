import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
private apiKey='AKiepHEt71fly1l6pRa5zWApmthU3jjE'
  constructor(private http: HttpClient) { }

  getLocation(text) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${text}`)
// return this.loc  
}
getCurrentWeather(locationKey) {

    // return this.five
    
    return this.http.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`)
    
  }
    get5daysForecast(locationKey) {

    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}`)
// return  this.current
}
loc= [
  {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    }
  },
  {
    "Version": 1,
    "Key": "3431644",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Telanaipura",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JA",
      "LocalizedName": "Jambi"
    }
  },
  {
    "Version": 1,
    "Key": "300558",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Telok Blangah New Town",
    "Country": {
      "ID": "SG",
      "LocalizedName": "Singapore"
    },
    "AdministrativeArea": {
      "ID": "05",
      "LocalizedName": "South West"
    }
  },
  {
    "Version": 1,
    "Key": "325876",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telford",
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "TFW",
      "LocalizedName": "Telford and Wrekin"
    }
  },
  {
    "Version": 1,
    "Key": "169072",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telavi",
    "Country": {
      "ID": "GE",
      "LocalizedName": "Georgia"
    },
    "AdministrativeArea": {
      "ID": "KA",
      "LocalizedName": "Kakheti"
    }
  },
  {
    "Version": 1,
    "Key": "230611",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telsiai",
    "Country": {
      "ID": "LT",
      "LocalizedName": "Lithuania"
    },
    "AdministrativeArea": {
      "ID": "TE",
      "LocalizedName": "Telšiai"
    }
  },
  {
    "Version": 1,
    "Key": "2723742",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telégrafo",
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "PA",
      "LocalizedName": "Pará"
    }
  },
  {
    "Version": 1,
    "Key": "186933",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Tela",
    "Country": {
      "ID": "HN",
      "LocalizedName": "Honduras"
    },
    "AdministrativeArea": {
      "ID": "AT",
      "LocalizedName": "Atlántida"
    }
  },
  {
    "Version": 1,
    "Key": "3453754",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telaga Asih",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JB",
      "LocalizedName": "West Java"
    }
  },
  {
    "Version": 1,
    "Key": "3453755",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telagamurni",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JB",
      "LocalizedName": "West Java"
    }
  }
]
five= {
  "Headline": {
    "EffectiveDate": "2020-08-01T08:00:00+03:00",
    "EffectiveEpochDate": 1596258000,
    "Severity": 4,
    "Text": "Pleasant Saturday",
    "Category": "mild",
    "EndDate": null,
    "EndEpochDate": null,
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2020-07-28T07:00:00+03:00",
      "EpochDate": 1595908800,
      "Temperature": {
        "Minimum": {
          "Value": 78,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 91,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
    },
    {
      "Date": "2020-07-29T07:00:00+03:00",
      "EpochDate": 1595995200,
      "Temperature": {
        "Minimum": {
          "Value": 78,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 91,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
    },
    {
      "Date": "2020-07-30T07:00:00+03:00",
      "EpochDate": 1596081600,
      "Temperature": {
        "Minimum": {
          "Value": 78,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 91,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
    },
    {
      "Date": "2020-07-31T07:00:00+03:00",
      "EpochDate": 1596168000,
      "Temperature": {
        "Minimum": {
          "Value": 77,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 89,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
    },
    {
      "Date": "2020-08-01T07:00:00+03:00",
      "EpochDate": 1596254400,
      "Temperature": {
        "Minimum": {
          "Value": 77,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 89,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 2,
        "IconPhrase": "Mostly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
    }
  ]}
current=[
  {
    "LocalObservationDateTime": "2020-07-28T17:56:00+03:00",
    "EpochTime": 1595948160,
    "WeatherText": "Sunny",
    "WeatherIcon": 1,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 31.2,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 88,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  }
] 
}
