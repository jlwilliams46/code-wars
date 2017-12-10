function filter_list(l) {
    let jamieRules = l.filter(awesome => !awesome.length > 0);
    return jamieRules;
}