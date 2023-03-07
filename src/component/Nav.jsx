import "./Nav.css";
function Nav(props) {
  const {level,setLevel} = props.setLevel
  const handleChang = (event) => {
    setLevel(event.target.value);
  };
  return (
    <nav>
      <label htmlFor="level">
        <span>ระดับความยาก</span>
        <select name="level" value={level} onChange={handleChang}>
          <option value="easy">ง่าย</option>
          <option value="normal">ปานกลาง</option>
          <option value="hard">ยาก</option>
        </select>
      </label>
    </nav>
  );
}
export default Nav;
