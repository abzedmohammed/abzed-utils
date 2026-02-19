import { Skeleton } from "antd";

export const CardSkeleton = ({ width, height, background }) => {
    return (
        <>
            <div className="w-full">
                <Skeleton.Node active style={{ height, width, background }} />
            </div>
        </>
    );
};
