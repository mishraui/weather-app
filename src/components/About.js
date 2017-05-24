import React from 'react';

const About = () => {
  return (
    <div className="col-xs-12 col-sm-12 text-justify">
      <p>
        Hello my name is Abhi (short for Abhishek) and this is my weather
        application. In the “HOME” tab of this application, user can enter any
        city in the USA to get the weather information of. The table will show a
        five-day forecast with three hour intervals of the temperature along with
        the weather conditions. From there user can choose which unit of
        temperature to show in the table. In the “CONVERSIONS” tab of this
        application, user can enter temperature in either of the three
        inputs (Fahrenheit, Celsius, or Kelvin) and the other two fields will
        automatically show you the conversion. The “ABOUT” tab of this
        application, will show a summary of this application.
      </p>

      <p>
        The core of this application uses Redux, React, React-Router, Redux-Promise.
        There in only one store that holds the state-tree for this application.
        There are 4 states on the state-tree called, cfk, weatherInputText,
        weatherData, and unit. Furthermore, with four states there are four
        reducers that take actions from six action creators.
      </p>


      <p>
        From node, redux-promise middleware is being used.
        The application is also using, “openweathermap.org” API.
      </p>

    </div>
  );
}

export default About;
