export const getDayNameAndTime = (date) => {
    const dateObject = new Date(date);
    const options = { weekday: "long" };

    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = dateObject.toLocaleTimeString("en-US", timeOptions);

    const dayName = dateObject.toLocaleDateString("en-US", options);
    const dayNameAndTime = `${dayName}, ${timeString}`;
    return dayNameAndTime;
};


export const getTimeByDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedTime = dateTime.toLocaleString("en-US", options);
    return formattedTime;
};

export const getformatedSunTime = (sunObject) => {
    const sunriseTime = new Date(sunObject.Rise);
    const sunsetTime = new Date(sunObject.Set);

    const formatTime = (date) => {
        const options = {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        return date.toLocaleString("en-US", options);
    };

    const formatTimeDifference = (difference) => {
        const hours = Math.floor(difference / 3600);
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = difference % 60;
        const sign = difference < 0 ? "-" : "+";

        return `${sign}${Math.abs(hours)}h ${minutes}m ${seconds}s`;
    };

    const sunRise = formatTime(sunriseTime);
    const sunSet = formatTime(sunsetTime);

    const timeAfterSunRise = formatTimeDifference(
        Math.floor((sunriseTime - new Date()) / 1000)
    );
    const timeRemaining = formatTimeDifference(
        Math.floor((sunsetTime - new Date()) / 1000)
    );

    return {
        sunRise: {
            time: sunRise,
            timeAfterSunRise: timeAfterSunRise,
        },
        sunSet: {
            time: sunSet,
            timeRemaining: timeRemaining,
        },
    };
};

export const getDayByDate = (date) => {
    const dateObject = new Date(date);
    const options = { weekday: "long" };
    const dayName = dateObject.toLocaleDateString("en-US", options);
    return dayName;
};

export const getDaysForcast = (data) => {
    const uniqueDatesMap = {};
    data.list.forEach((entry) => {
        const date = entry.dt_txt.substring(0, 10);
        if (!uniqueDatesMap[date]) {
            uniqueDatesMap[date] = entry;
        }
    });
    const uniqueDatesArray = Object.values(uniqueDatesMap);
    return uniqueDatesArray;
};
