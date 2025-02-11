

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

"""
js_class = """
class manciniLevels {
    map(d) {
        return {
"""

js_class = js_class + "\t\t\tgraphics: d.isLast() && {\n"
js_class = js_class + "\t\t\t\titems: [\n"

js_class = js_class + "\t\t\t\t\t{\n"
js_class = js_class + "\t\t\t\t\t\ttag: 'LineSegments',\n"
js_class = js_class + "\t\t\t\t\t\tkey: 'lines_minor_res',\n"
js_class = js_class + "\t\t\t\t\t\tlines: [\n"
for idx in range(len(list_levels_resistance)):
    if not 'major' in list_labels_level_resistance[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_resistance[idx]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_resistance[idx]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
for idx in range(len(list_ranges_resistance)):
    if not 'major' in list_labels_ranges_resistance[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][0]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][0]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][1]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][1]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
js_class = js_class + "\t\t\t\t\t\t],\n"
js_class = js_class + "\t\t\t\t\t\tlineStyle: {\n"
js_class = js_class + "\t\t\t\t\t\t\tlineWidth: 1,\n"
js_class = js_class + "\t\t\t\t\t\t\tcolor: 'red'\n"
js_class = js_class + "\t\t\t\t\t\t}\n"
js_class = js_class + "\t\t\t\t\t},\n"

js_class = js_class + "\t\t\t\t\t{\n"
js_class = js_class + "\t\t\t\t\t\ttag: 'LineSegments',\n"
js_class = js_class + "\t\t\t\t\t\tkey: 'lines_major_res',\n"
js_class = js_class + "\t\t\t\t\t\tlines: [\n"
for idx in range(len(list_levels_resistance)):
    if 'major' in list_labels_level_resistance[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_resistance[idx]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_resistance[idx]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
for idx in range(len(list_ranges_resistance)):
    if 'major' in list_labels_ranges_resistance[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][0]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][0]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][1]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_resistance[idx][1]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
js_class = js_class + "\t\t\t\t\t\t],\n"
js_class = js_class + "\t\t\t\t\t\tlineStyle: {\n"
js_class = js_class + "\t\t\t\t\t\t\tlineWidth: 2,\n"
js_class = js_class + "\t\t\t\t\t\t\tcolor: 'red'\n"
js_class = js_class + "\t\t\t\t\t\t}\n"
js_class = js_class + "\t\t\t\t\t},\n"

js_class = js_class + "\t\t\t\t\t{\n"
js_class = js_class + "\t\t\t\t\t\ttag: 'LineSegments',\n"
js_class = js_class + "\t\t\t\t\t\tkey: 'lines_minor_sup',\n"
js_class = js_class + "\t\t\t\t\t\tlines: [\n"
for idx in range(len(list_levels_support)):
    if not 'major' in list_labels_level_support[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_support[idx]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_support[idx]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
for idx in range(len(list_ranges_support)):
    if not 'major' in list_labels_ranges_support[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][0]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][0]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][1]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][1]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
js_class = js_class + "\t\t\t\t\t\t],\n"
js_class = js_class + "\t\t\t\t\t\tlineStyle: {\n"
js_class = js_class + "\t\t\t\t\t\t\tlineWidth: 1,\n"
js_class = js_class + "\t\t\t\t\t\t\tcolor: 'green'\n"
js_class = js_class + "\t\t\t\t\t\t}\n"
js_class = js_class + "\t\t\t\t\t},\n"

js_class = js_class + "\t\t\t\t\t{\n"
js_class = js_class + "\t\t\t\t\t\ttag: 'LineSegments',\n"
js_class = js_class + "\t\t\t\t\t\tkey: 'lines_major_sup',\n"
js_class = js_class + "\t\t\t\t\t\tlines: [\n"
for idx in range(len(list_levels_support)):
    if 'major' in list_labels_level_support[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_support[idx]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_levels_support[idx]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
for idx in range(len(list_ranges_support)):
    if 'major' in list_labels_ranges_support[idx]:
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][0]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][0]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\t{\n"
        js_class = js_class + "\t\t\t\t\t\t\ttag: 'Line',\n"
        js_class = js_class + "\t\t\t\t\t\t\ta: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(1),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][1]}),\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tb: {\n"
        js_class = js_class + "\t\t\t\t\t\t\t\tx: du(d.index()+5),\n"
        js_class = js_class + f"\t\t\t\t\t\t\t\ty: du({list_ranges_support[idx][1]})\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteStart: true,\n"
        js_class = js_class + "\t\t\t\t\t\t\tinfiniteEnd: false\n"
        js_class = js_class + "\t\t\t\t\t\t\t},\n"
js_class = js_class + "\t\t\t\t\t\t],\n"
js_class = js_class + "\t\t\t\t\t\tlineStyle: {\n"
js_class = js_class + "\t\t\t\t\t\t\tlineWidth: 2,\n"
js_class = js_class + "\t\t\t\t\t\t\tcolor: 'green'\n"
js_class = js_class + "\t\t\t\t\t\t}\n"
js_class = js_class + "\t\t\t\t\t},\n"


for idx in range(len(list_ranges_support)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Shapes',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'rects{list_ranges_support[idx][0]}',\n"
    js_class = js_class + "\t\t\t\t\t\tprimitives:\n"
    js_class = js_class + "\t\t\t\t\t\t[\n"
    js_class = js_class + "\t\t\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\t\t\ttag: 'Rectangle',\n"
    js_class = js_class + "\t\t\t\t\t\t\t\tposition: {\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t\tx: du(d.index()+4),\n"
    js_class = js_class + f"\t\t\t\t\t\t\t\t\ty: du({min(list_ranges_support[idx][1],list_ranges_support[idx][0])}),\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t},\n"
    js_class = js_class + "\t\t\t\t\t\t\t\tsize: {\n"
    js_class = js_class + f"\t\t\t\t\t\t\t\t\theight: du({abs(list_ranges_support[idx][1]-list_ranges_support[idx][0])}),\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t\twidth: du(1)\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t},\n"
    js_class = js_class + "\t\t\t\t\t\t\t\tinfiniteStart: true\n"
    js_class = js_class + "\t\t\t\t\t\t\t}\n"
    js_class = js_class + "\t\t\t\t\t\t],\n"
    js_class = js_class + "\t\t\t\t\t\tfillStyle: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tcolor: 'green',\n"
    js_class = js_class + "\t\t\t\t\t\t\topacity: 30\n"
    js_class = js_class + "\t\t\t\t\t\t}\n"
    js_class = js_class + "\t\t\t\t\t},\n"

for idx in range(len(list_ranges_resistance)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Shapes',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'rects{list_ranges_resistance[idx][0]}',\n"
    js_class = js_class + "\t\t\t\t\t\tprimitives:\n"
    js_class = js_class + "\t\t\t\t\t\t[\n"
    js_class = js_class + "\t\t\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\t\t\ttag: 'Rectangle',\n"
    js_class = js_class + "\t\t\t\t\t\t\t\tposition: {\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t\tx: du(d.index()+4),\n"
    js_class = js_class + f"\t\t\t\t\t\t\t\t\ty: du({min(list_ranges_resistance[idx][0],list_ranges_resistance[idx][1])}),\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t},\n"
    js_class = js_class + "\t\t\t\t\t\t\t\tsize: {\n"
    js_class = js_class + f"\t\t\t\t\t\t\t\t\theight: du({abs(list_ranges_resistance[idx][1]-list_ranges_resistance[idx][0])}),\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t\twidth: du(1)\n"
    js_class = js_class + "\t\t\t\t\t\t\t\t},\n"
    js_class = js_class + "\t\t\t\t\t\t\t\tinfiniteStart: true\n"
    js_class = js_class + "\t\t\t\t\t\t\t}\n"
    js_class = js_class + "\t\t\t\t\t\t],\n"
    js_class = js_class + "\t\t\t\t\t\tfillStyle: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tcolor: 'green',\n"
    js_class = js_class + "\t\t\t\t\t\t\topacity: 30\n"
    js_class = js_class + "\t\t\t\t\t\t}\n"
    js_class = js_class + "\t\t\t\t\t},\n"


for idx in range(len(list_levels_resistance)):
    js_class = js_class + "\t\t\t\t\t{\n"
    js_class = js_class + "\t\t\t\t\t\ttag: 'Text',\n"
    js_class = js_class + f"\t\t\t\t\t\tkey: 'd{list_levels_resistance[idx]}',\n"
    js_class = js_class + "\t\t\t\t\t\tpoint: {\n"
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 10),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du({list_levels_resistance[idx]}), \"+\", px(0))\n"
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
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 10),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du({list_levels_support[idx]}), \"+\", px(0))\n"
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
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 10),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du({list_ranges_resistance[idx][0]}), \"+\", px(0))\n"
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
    js_class = js_class + "\t\t\t\t\t\t\tx: du(d.index() + 10),\n"
    js_class = js_class + f"\t\t\t\t\t\t\ty: op(du({list_ranges_support[idx][0]}), \"+\", px(0))\n"
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

js_module_exports = """
module.exports = {
    name: "Mancini Levels",
    description: "Mancini Levels",
    calculator: manciniLevels,
    inputType: meta.InputType.BARS,
    tags: ['MyCustom'],
};
"""

f = open('mancini_levels.js', 'w')
f.write(js_boilerplate)
f.write(js_class)
f.write(js_module_exports)
f.close()

print(js_boilerplate)
print(js_class)
print(js_module_exports)
