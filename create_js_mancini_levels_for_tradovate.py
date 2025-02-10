import json

jsonn_mancini = json.load(open('mancini_es.json'))

list_levels_support = jsonn_mancini['levels_support']
list_levels_resistance = jsonn_mancini['levels_resistance']
list_ranges_support = jsonn_mancini['ranges_support']
list_ranges_resistance = jsonn_mancini['ranges_resistance']
list_labels_level_support = jsonn_mancini['labels_levels_support']
list_labels_level_resistance = jsonn_mancini['labels_levels_resistance']
list_labels_ranges_support = jsonn_mancini['labels_ranges_support']
list_labels_ranges_resistance = jsonn_mancini['labels_ranges_resistance']

list_params = []
list_scheme = []
list_d_level = []

for idx in range(0, len(list_levels_support)):
    str_level = str(list_levels_support[idx])
    list_params.append('d' + str_level + ': number('+str_level+', 1, 0)')
    list_d_level.append('d' + str_level)
    if 'major' in list_labels_level_support[idx]:
        str_minor_or_major = 'strongSup'
    else:
        str_minor_or_major = 'sup'
    list_scheme.append('d' + str_level + ': ' + str_minor_or_major)

for idx in range(0, len(list_levels_resistance)):
    str_level = str(list_levels_resistance[idx])
    list_params.append('d' + str_level + ': number('+str_level+', 1, 0)')
    list_d_level.append('d' + str_level)
    if 'major' in list_labels_level_resistance[idx]:
        str_minor_or_major = 'strongRes'
    else:
        str_minor_or_major = 'res'
    list_scheme.append('d' + str_level + ': ' + str_minor_or_major)

for idx in range(0, len(list_ranges_support)):
    for level in list_ranges_support[idx]:
        str_level = str(level)
        list_params.append('d' + str_level + ': number('+str_level+', 1, 0)')
        list_d_level.append('d' + str_level)
        if 'major' in list_labels_ranges_support[idx]:
            str_minor_or_major = 'strongSup'
        else:
            str_minor_or_major = 'sup'
        list_scheme.append('d' + str_level + ': ' + str_minor_or_major)

for idx in range(0, len(list_ranges_resistance)):
    for level in list_ranges_resistance[idx]:
        str_level = str(level)
        list_params.append('d' + str_level + ': number('+str_level+', 1, 0)')
        list_d_level.append('d' + str_level)
        if 'major' in list_labels_ranges_resistance[idx]:
            str_minor_or_major = 'strongRes'
        else:
            str_minor_or_major = 'res'
        list_scheme.append('d' + str_level + ': ' + str_minor_or_major)


if 0:
    print(list_params)
    print(list_d_level)
    print(list_scheme)

js_boilerplate = """
const predef = require("./tools/predef");
const EMA = require("./tools/EMA");
const p = require("./tools/plotting");
const meta = require("./tools/meta");
const { ParamType } = meta;
const { px, du, op, min } = require("./tools/graphics");

function number(defValue, step, min) {
    return {
        type: ParamType.NUMBER,
        def: defValue,
        restrictions: {
            step: step || 1,
            min: min > 0 ? min : 0
        }
    };
}

const strongRes = predef.styles.plot({color: 'red', lineWidth: 2});

const res = predef.styles.plot({color: 'red', lineWidth: 1});

const strongSup = predef.styles.plot({color: 'green', lineWidth: 3});

const sup = predef.styles.plot({color: 'green', lineWidth: 1});
"""

js_class = """
class manciniLevels {
    map(d, i, history) {
        return {
"""
for dlevel in list_d_level:
    js_class = js_class + "\t\t\t" + str(dlevel) + ": this.props." + str(dlevel) + ",\n"

js_class = js_class + "\t\t\tgraphics: d.isLast() && {\n"
js_class = js_class + "\t\t\t\titems: [\n"
for idx in range(len(list_levels_resistance)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Text',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'd{list_levels_resistance[idx]}',\n"
    js_class = js_class + "\t\t\t\t\t\tpoint: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 7),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du(this.props.d{list_levels_resistance[idx]}), \"+\", px(0))\n"
    js_class = js_class + "\t\t\t\t\t\t},\n"
    js_class = js_class + f"\t\t\t\t\t\ttext: \"{list_labels_level_resistance[idx]}\",\n"
    js_class = js_class + "\t\t\t\t\t\tstyle: {fontSize: 11, fontWeight: \"bold\", fill: \"#e06666\"},\n"
    js_class = js_class + "\t\t\t\t\t\ttextAlignment: 'rightMiddle',\n"
    js_class = js_class + "\t\t\t\t\t},\n"
for idx in range(len(list_levels_support)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Text',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'd{list_levels_support[idx]}',\n"
    js_class = js_class + "\t\t\t\t\t\tpoint: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 7),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du(this.props.d{list_levels_support[idx]}), \"+\", px(0))\n"
    js_class = js_class + "\t\t\t\t\t\t},\n"
    js_class = js_class + f"\t\t\t\t\t\ttext: \"{list_labels_level_support[idx]}\",\n"
    js_class = js_class + "\t\t\t\t\t\tstyle: {fontSize: 11, fontWeight: \"bold\", fill: \"#66e066\"},\n"
    js_class = js_class + "\t\t\t\t\t\ttextAlignment: 'rightMiddle',\n"
    js_class = js_class + "\t\t\t\t\t},\n"
for idx in range(len(list_ranges_resistance)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Text',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'd{list_ranges_resistance[idx][0]}',\n"
    js_class = js_class + "\t\t\t\t\t\tpoint: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 7),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du(this.props.d{list_ranges_resistance[idx][0]}), \"+\", px(0))\n"
    js_class = js_class + "\t\t\t\t\t\t},\n"
    js_class = js_class + f"\t\t\t\t\t\ttext: \"{list_labels_ranges_resistance[idx]}\",\n"
    js_class = js_class + "\t\t\t\t\t\tstyle: {fontSize: 11, fontWeight: \"bold\", fill: \"#e06666\"},\n"
    js_class = js_class + "\t\t\t\t\t\ttextAlignment: 'rightMiddle',\n"
    js_class = js_class + "\t\t\t\t\t},\n"
for idx in range(len(list_ranges_support)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Text',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'd{list_ranges_support[idx][0]}',\n"
    js_class = js_class + "\t\t\t\t\t\tpoint: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 7),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du(this.props.d{list_ranges_support[idx][0]}), \"+\", px(0))\n"
    js_class = js_class + "\t\t\t\t\t\t},\n"
    js_class = js_class + f"\t\t\t\t\t\ttext: \"{list_labels_ranges_support[idx]}\",\n"
    js_class = js_class + "\t\t\t\t\t\tstyle: {fontSize: 11, fontWeight: \"bold\", fill: \"#66e066\"},\n"
    js_class = js_class + "\t\t\t\t\t\ttextAlignment: 'rightMiddle',\n"
    js_class = js_class + "\t\t\t\t\t},\n"

js_class = js_class + "\t\t\t\t]\n"
js_class = js_class + "\t\t\t},\n"

js_class = js_class + """
        };
    }
}
"""

js_fn = """
function rangePlotter(canvas, calculatorInstance, history) {
    for(let i=history.data.length-50; i<history.data.length; ++i) {
        const item = history.get(i);
        const x = p.x.get(item);
"""
for idx in range(0, len(list_ranges_support)):
    rng = list_ranges_support[idx]
    js_fn = js_fn + "\t\tif (item.d"+str(rng[0])+" !== undefined && item.d"+str(rng[1])+" !== undefined) {\n"
    js_fn = js_fn + "\t\t\tcanvas.drawLine(\n"
    js_fn = js_fn + "\t\t\t\tp.offset(x, item.d"+str(rng[0])+"),\n"
    js_fn = js_fn + "\t\t\t\tp.offset(x, item.d"+str(rng[1])+"),\n"
    js_fn = js_fn + "\t\t\t\t{color: \"green\", relativeWidth: 1, opacity: 0.3});\n"
    js_fn = js_fn + "\t\t}\n"

for idx in range(0, len(list_ranges_resistance)):
    rng = list_ranges_resistance[idx]
    js_fn = js_fn + "\t\tif (item.d"+str(rng[0])+" !== undefined && item.d"+str(rng[1])+" !== undefined) {\n"
    js_fn = js_fn + "\t\t\tcanvas.drawLine(\n"
    js_fn = js_fn + "\t\t\t\tp.offset(x, item.d"+str(rng[0])+"),\n"
    js_fn = js_fn + "\t\t\t\tp.offset(x, item.d"+str(rng[1])+"),\n"
    js_fn = js_fn + "\t\t\t\t{color: \"red\", relativeWidth: 1, opacity: 0.3});\n"
    js_fn = js_fn + "\t\t}\n"

#        if (item.data5300 !== undefined && item.data5305 !== undefined) {
#            canvas.drawLine(
#                p.offset(x, item.data5300),
#                p.offset(x, item.data5305),
#               {color: "green", relativeWidth: 1, opacity: 0.3});
#        }
js_fn = js_fn + """
    }
}
"""

js_module_exports = """
module.exports = {
    name: "Mancini Levels",
    description: "Mancini Levels",
    calculator: manciniLevels,
    inputType: meta.InputType.BARS,
    tags: ['MyCustom'],
    params: {
"""
for param in list_params:
    js_module_exports = js_module_exports + "\t\t\t" + param + ",\n"
js_module_exports = js_module_exports + """
    },
    plotter: [
"""
for dlevel in list_d_level:
    js_module_exports = js_module_exports + "\t\t\tpredef.plotters.singleline(\""+str(dlevel)+"\"),\n"
js_module_exports = js_module_exports + """
            predef.plotters.custom(rangePlotter)
    ],
    schemeStyles: {
        dark: {
"""
for scheme in list_scheme:
    js_module_exports = js_module_exports + "\t\t\t" + scheme + ",\n"
js_module_exports = js_module_exports + """
        }
   }
};
"""
#         if (item.data5300 !== undefined && item.data5305 !== undefined) {
#             canvas.drawLine(
#                 p.offset(x, item.data5300),
#                 p.offset(x, item.data5305),
#                {color: "green", relativeWidth: 1, opacity: 0.3});
#         }


#     params: {
#         data5300: number(5300, 1, 0),
#         data5315: number(5315, 1, 0),
#     },
#     plotter: [
#         predef.plotters.singleline("data5300"),
#         predef.plotters.singleline("data5315"),
#         predef.plotters.custom(rangePlotter)
#     ],
#     schemeStyles: {
#         dark: {
#             data5300: sup,
#             data5315: res
#         }
#    }

#         return {
#             data5300: this.props.data5300,
#             data5315: this.props.data5315
#         };

f = open('mancini_levels.js', 'w')
f.write(js_boilerplate)
f.write(js_class)
f.write(js_fn)
f.write(js_module_exports)
f.close()

print(js_boilerplate)
print(js_class)
print(js_fn)
print(js_module_exports)