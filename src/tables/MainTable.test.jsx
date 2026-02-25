import { render, screen } from "@testing-library/react";
import { MainTable } from "./MainTable";

describe("MainTable", () => {
    it("renders table data", () => {
        render(
            <MainTable
                rowKey="id"
                columns={[{ title: "Name", dataIndex: "name", key: "name" }]}
                dataSource={[{ id: 1, name: "Abzed" }]}
                pagination={false}
            />,
        );

        expect(screen.getByText("Name")).toBeTruthy();
        expect(screen.getByText("Abzed")).toBeTruthy();
    });
});
