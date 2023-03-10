import "reflect-metadata";

import {
    closeTestingConnections,
    createTestingConnections,
} from "../../utils/test-utils";

import { DataSource } from "../../../src/data-source/DataSource";
import { afterEach } from "mocha";
import { expect } from "chai";

describe("github issues > #4956 create lapin_metatable when running migrations.", () => {
    let connections: DataSource[];

    afterEach(async () => {
        await closeTestingConnections(connections);
    });

    it("should create lapin_metadata table when running migrations with views", async () => {
        connections = await createTestingConnections({
            entities: [__dirname + "/entities/*{.js,.ts}"],
            migrations: [__dirname + "/migrations/WithView{.js,.ts}"],
            enabledDrivers: ["mysql", "mariadb"],
            schemaCreate: false,
            dropSchema: true,
        });

        await Promise.all(
            connections.map(async (connection) => {
                const queryRunner = connection.createQueryRunner();
                const typeormMetadataTableName = "lapin_metadata";

                const hasMetadataTable = await queryRunner.hasTable(
                    typeormMetadataTableName,
                );

                expect(hasMetadataTable).to.be.false;

                await connection.runMigrations();

                const hasPostMigrationMetadataTable =
                    await queryRunner.hasTable(typeormMetadataTableName);

                expect(hasPostMigrationMetadataTable).to.be.true;
            }),
        );
    });

    it("should not create lapin_metadata table when running migrations if there are no views", async () => {
        connections = await createTestingConnections({
            entities: [__dirname + "/entities/Foo{.js,.ts}"],
            migrations: [__dirname + "/migrations/WithoutView{.js,.ts}"],
            enabledDrivers: ["mysql", "mariadb"],
            schemaCreate: false,
            dropSchema: true,
        });

        await Promise.all(
            connections.map(async (connection) => {
                const queryRunner = connection.createQueryRunner();
                const typeormMetadataTableName = "lapin_metadata";

                const hasMetadataTable = await queryRunner.hasTable(
                    typeormMetadataTableName,
                );

                expect(hasMetadataTable).to.be.false;

                await connection.runMigrations();

                const hasPostMigrationMetadataTable =
                    await queryRunner.hasTable(typeormMetadataTableName);

                expect(hasPostMigrationMetadataTable).to.be.false;
            }),
        );
    });
});
