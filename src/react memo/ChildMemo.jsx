import { memo } from "react";

const ChildMemo = memo(({ name }) => {

    console.log("Child Rendering...");

    return (
        <div>
            <p className=" text-center mt-10 "> Hello {name} </p>
        </div>
    )
})

export default ChildMemo
