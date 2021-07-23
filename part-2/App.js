function App() {
    return <>
    <Tweet username="u1" name="bob" date="9/11" message="yolo" />
    <Tweet username="u2" name="bill" date="9/12" message="yolopoop" />
    <Tweet username="u3" name="bro" date={new Date().toDateString()} message="yolo420" />
    </>
}