import { filePaths, domElements } from './globalvars.js';
import { d3glycanstructure } from './d3glycanstruc.js';

// Replaces the CSS to inline styles using the svgStyle global variable
async function replacecss(svgid) {

    //load the css file into svgStyle
    var svgStyle = await d3.text(`${window.location.protocol}//${window.location.host}${filePaths.css}`).then(function (d) {
        return d;
    });

    // replace all comments in the svg style
    var allStyle = svgStyle.replace(/\/\*.*\n*\*\//g, '').replace(/\r?\n|\r/g, '').split('}');

    allStyle.forEach(function (el) {
        if (el.trim() != '') {
            var full_rule_string = el.split('{');
            var selector = full_rule_string[0].trim();
            var all_rule = full_rule_string[1].split(';');
            all_rule.forEach(function (elem) {
                if (elem.trim() != '') {
                    var attr_value = elem.split(':');
                    var prop = attr_value[0].trim();
                    var value = attr_value[1].trim();
                    if (prop == 'font-weight') {
                        d3.select('#' + svgid).selectAll(selector).each(function (d, i) {
                            if (!this.getAttribute(prop) && this.style[prop] !== value) {
                                d3.select(this).style(prop + '', value + '');
                            }
                        });
                    } else {
                        d3.select('#' + svgid).selectAll(selector).each(function (d, i) {
                            if (!this.getAttribute(prop) && !this.style[prop]) {
                                d3.select(this).style(prop + '', value + '');
                            }
                        });
                    }
                }
            });
        }
    });
}


// Replaces <use> in the svg using the svgarr global
async function replaceuse(svgid) {
    var svgarr = await d3.xml(`${window.location.protocol}//${window.location.host}${filePaths.monosSVG}`).then(function (data) {
        var arr = [].map.call(data.querySelectorAll("symbol"), function (symbol) {
            return {
                id: symbol.getAttribute("data-abbr"), //use the data-abbr to get id
                viewBox: symbol.getAttribute('viewBox'),
                innerhtml: symbol.innerHTML.replace(/\n|\t/g, '').trim(),
                fullname: symbol.getAttribute("data-shortname") //use the data-shortname to get the shortname
            };
        });
        return arr;
    });


    var use = $(`#${svgid} use`).each(function (i) {
        var href = this.getAttribute('href');
        if (href === null) { return }
        var obj = {
            id: href.split('#')[1],
            x: this.getAttribute('x'),
            y: this.getAttribute('y'),
            height: this.getAttribute('height'),
            width: this.getAttribute('width')
        }

        //get the viewbox and html from svgarr global variable mapped above
        var mono = svgarr.find(e => {
            return e.id.toLowerCase() == obj.id;
        });

        var s = '<svg id="' + obj.id + '" x="' + obj.x + '" y="' + obj.y + '" height="' + obj.height + '" width="' + obj.width + '" viewBox="' + mono.viewBox + '">'
        s += mono.innerhtml;
        s += '</svg>'
        $(this).parent().prepend(s); //prepend final svg
    }).remove();
}

// Function to save SVG
export async function savesvg(svgid) {
    await replacecss(svgid);
    await replaceuse(svgid);
    var svgData = document.getElementById(svgid);
    svgData.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgData.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svgData = document.getElementById(svgid).outerHTML;
    var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "Figure.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    d3glycanstructure(document.getElementById(domElements.nameInputID).value); //redraw glycan
}
