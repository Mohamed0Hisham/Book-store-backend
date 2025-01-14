import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const News = mongoose.model("news", newsSchema);
export default News;
