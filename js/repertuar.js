//System tymczasowy, do zmiany.
const boxes0 = Array.from(
    document.getElementsByClassName('monday')
);
const boxes1 = Array.from(
    document.getElementsByClassName('tuesday')
);
const boxes2 = Array.from(
    document.getElementsByClassName('wednesday')
);
const boxes3 = Array.from(
    document.getElementsByClassName('thursday')
);
const boxes4 = Array.from(
    document.getElementsByClassName('friday')
);
const boxes5 = Array.from(
    document.getElementsByClassName('saturday')
);
const boxes6 = Array.from(
    document.getElementsByClassName('sunday')
);

function show(dayOfWeek)
{
    const dayOfWeekClass = Array.from(
        document.getElementsByClassName(dayOfWeek)
    );

    boxes0.forEach(box => {
        box.style.display="none";
    });
    boxes1.forEach(box => {
        box.style.display="none";
    });
    boxes2.forEach(box => {
        box.style.display="none";
    });
    boxes3.forEach(box => {
        box.style.display="none";
    });
    boxes4.forEach(box => {
        box.style.display="none";
    });
    boxes5.forEach(box => {
        box.style.display="none";
    });
    boxes6.forEach(box => {
        box.style.display="none";
    });

    dayOfWeekClass.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
}

function showWeek()
{
    boxes0.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
    boxes1.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
    boxes2.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
    boxes3.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
    boxes4.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
    boxes5.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
    boxes6.forEach(box => {
        box.style.display="flex";
        box.style.flexWrap="wrap";
        box.style.flexDirection="row";
        box.style.justifyContent="center";
        box.style.alignContent="center";
        box.style.alignItems="center";
        box.style.marginTop="20px";
    });
}
