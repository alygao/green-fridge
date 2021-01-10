
def find_foods(strins):
    ignore = ['receipt', 'subtotal', 'tax', '$', '\f', '.', ':', ',', '?', '#'] + [str(i) for i in range(10)]
    res = []
    for strin in strins:
        st = strin.lower()
        for i in ignore:
            st = st.replace(i, "")
        while st != "" and st[-1] == ' ':
            st = st[:-1]
        if st != "":
            res.append(st)

    return res
