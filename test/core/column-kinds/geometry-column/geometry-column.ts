import { expect } from "chai";
import "reflect-metadata";
import { DataSource } from "../../../../src";
import {
    closeTestingConnections,
    createTestingConnections,
    reloadTestingDatabases,
} from "../../../utils/test-utils";
import { FeatureWithoutSRID, FeatureWithSRID } from "./entity/Feature";

describe("column kinds > geometry column", () => {
    let connections: DataSource[];
    before(
        async () =>
            (connections = await createTestingConnections({
                entities: [__dirname + "/entity/*{.js,.ts}"],
                enabledDrivers: ["mssql"],
            })),
    );
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("geometry column with SRID defined should be saved without error for valid WKT input", () =>
        Promise.all(
            connections.map(async (connection) => {
                const featureRepository =
                    connection.getRepository(FeatureWithSRID);

                // save a new feature
                const feature = new FeatureWithSRID();
                feature.name = "feature";
                feature.shape = "POINT (828365.16700000037 823377.14699999988)";
                await featureRepository.save(feature);

                // load and check if createdAt was a value set by us
                const loadedfeature = await featureRepository.findOneBy({
                    id: feature.id,
                });
                expect(loadedfeature).to.be.not.empty;
                expect(loadedfeature!.name).to.be.eql("feature");
                expect(loadedfeature!.shape).to.be.eql(
                    "POINT (828365.16700000037 823377.14699999988)",
                );
            }),
        ));

    it("geometry column with SRID defined should be updated without error for valid WKT input", () =>
        Promise.all(
            connections.map(async (connection) => {
                const featureRepository =
                    connection.getRepository(FeatureWithSRID);

                // save a new feature
                const feature = new FeatureWithSRID();
                feature.name = "feature";
                feature.shape = "POINT (828365.16700000037 823377.14699999988)";
                await featureRepository.save(feature);

                // load and check if createdAt was a value set by us
                const loadedfeature = await featureRepository.findOneBy({
                    id: feature.id,
                });
                expect(loadedfeature).to.be.not.empty;
                expect(loadedfeature!.name).to.be.eql("feature");
                expect(loadedfeature!.shape).to.be.eql(
                    "POINT (828365.16700000037 823377.14699999988)",
                );

                feature.shape = "POINT (728365.16700000037 723377.14699999988)";
                await featureRepository.save(feature);

                // load and check if createdAt is a date (generated by db)
                const updatedfeature = await featureRepository.findOneBy({
                    id: feature.id,
                });
                expect(updatedfeature).to.be.not.empty;
                expect(updatedfeature!.name).to.be.eql("feature");
                expect(updatedfeature!.shape).to.be.eql(
                    "POINT (728365.16700000037 723377.14699999988)",
                );
            }),
        ));

    it("geometry column with no SRID should be saved without error for valid WKT input", () =>
        Promise.all(
            connections.map(async (connection) => {
                const featureRepository =
                    connection.getRepository(FeatureWithoutSRID);

                // save a new feature
                const feature = new FeatureWithoutSRID();
                feature.name = "feature";
                feature.shape = "POINT (0 0)";
                await featureRepository.save(feature);

                // load and check if createdAt is a date (generated by db)
                const loadedfeature = await featureRepository.findOneBy({
                    id: feature.id,
                });
                expect(loadedfeature).to.be.not.empty;
                expect(loadedfeature!.name).to.be.eql("feature");
                expect(loadedfeature!.shape).to.be.eql("POINT (0 0)");
            }),
        ));

    it("geometry column with no SRID should be updated without error for valid WKT input", () =>
        Promise.all(
            connections.map(async (connection) => {
                const featureRepository =
                    connection.getRepository(FeatureWithoutSRID);

                // save a new feature
                const feature = new FeatureWithoutSRID();
                feature.name = "feature";
                feature.shape = "POINT (0 0)";
                await featureRepository.save(feature);

                // load and check if createdAt is a date (generated by db)
                const loadedfeature = await featureRepository.findOneBy({
                    id: feature.id,
                });
                expect(loadedfeature).to.be.not.empty;
                expect(loadedfeature!.name).to.be.eql("feature");
                expect(loadedfeature!.shape).to.be.eql("POINT (0 0)");

                feature.shape = "POINT (0.5 0.5)";
                await featureRepository.save(feature);

                // load and check if createdAt is a date (generated by db)
                const updatedfeature = await featureRepository.findOneBy({
                    id: feature.id,
                });
                expect(updatedfeature).to.be.not.empty;
                expect(updatedfeature!.name).to.be.eql("feature");
                expect(updatedfeature!.shape).to.be.eql("POINT (0.5 0.5)");
            }),
        ));
});
