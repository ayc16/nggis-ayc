function e(l){let o=l.layer;return"floorInfo"in o&&o.floorInfo?.floorField&&"floors"in l.view?f(l.view.floors,o.floorInfo.floorField):null}function i(l,o){return"floorInfo"in o&&o.floorInfo?.floorField?f(l,o.floorInfo.floorField):null}function f(l,o){if(!l?.length)return null;let n=l.filter(r=>r!=="").map(r=>`'${r}'`);return n.push("''"),`${o} IN (${n.join(",")}) OR ${o} IS NULL`}export{e as a,i as b};