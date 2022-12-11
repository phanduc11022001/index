# Sử dụng Hook tăng thêm nhiều tính năng

function ComponentB() {
    // useState
    const [state, setState] = useState(initState);

    // useEffect
    useEffect(() => {

    }, [deps])

    // useLayoutEffect
    useLayoutEffect(() => {

    }, [deps])

    // useRef
    const ref = useRef()

    // useCallback
    const fn = useCallback(() =>{

    }, [deps])

    // useMemo 
    const result = useMemo(() => {
       // return result for memo 
    }, [deps])

    // useReducer
    const [state, dispatch] = useReducer(reduce, initialArg, init)

    // useContext
    const value = useContext(MyContext)

    // use ImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    // useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline)

    return <h1>Hooks</h1>
}