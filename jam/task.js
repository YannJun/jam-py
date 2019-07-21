function field_name_map(item) {
    const fields = item.fields;
    const result = fields.reduce(function(map, obj) {
        map[obj.field_name] = obj;
        return map;
    }, {});
    return result;
}

function field_by_name(name, fields) {
    const _field_name_map = this.field_name_map
    if (name in _field_name_map) {
        return _field_name_map[name]
    }
    else {
        return null;
    }
}

function field_id_map(item) {
    const fields = item.fields;
    const result = fields.reduce(function(map, obj) {
        map[obj.ID] = obj;
        return map;
    }, {});
    return result;
}

function field_by_id(ID, fields) {
    const _field_id_map = this.field_id_map
    if (ID in _field_id_map) {
        return _field_id_map[ID]
    }
    else {
        return null;
    }
}
