import { Response, Request } from "express";
import { IAstronaut } from "../../types/astronaut";
import Astronaut from "../../models/astronaut";

const getAstronauts = async (req: Request, res: Response): Promise<void> => {
  try {
    const astronauts: IAstronaut[] = await Astronaut.find();
    res.status(200).json({ astronauts });
  } catch (error) {
    throw error;
  }
};

const addAstronaut = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IAstronaut,
      "firstName" | "lastName" | "team" | "age" | "nationality"
    >;

    const astronaut: IAstronaut = new Astronaut({
      firstName: body.firstName,
      lastName: body.lastName,
      team: body.team,
      age: body.age,
      nationality: body.nationality,
    });

    const newAstronaut: IAstronaut = await astronaut.save();
    const allAstronauts: IAstronaut[] = await Astronaut.find();

    res.status(201).json({
      message: "Astronaut added",
      astronaut: newAstronaut,
      astronauts: allAstronauts,
    });
  } catch (error) {
    throw error;
  }
};

const updateAstronaut = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateAstronaut: IAstronaut | null =
      await Astronaut.findByIdAndUpdate({ _id: id }, body);
    const allAstronauts: IAstronaut[] = await Astronaut.find();
    res.status(200).json({
      message: "Astronaut updated",
      astronaut: updateAstronaut,
      astronauts: allAstronauts,
    });
  } catch (error) {
    throw error;
  }
};

const deleteAstronaut = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedAstronaut: IAstronaut | null =
      await Astronaut.findByIdAndRemove(req.params.id);
    const allAstronauts: IAstronaut[] = await Astronaut.find();
    res.status(200).json({
      message: "Astronaut deleted",
      astronaut: deletedAstronaut,
      astronauts: allAstronauts,
    });
  } catch (error) {
    throw error;
  }
};

export { getAstronauts, addAstronaut, updateAstronaut, deleteAstronaut };
