import * as pqi from 'pareto-core/dist/query_interface'

import * as d_stream_get_instream_data from "./generated/liana/schemas/get_indata/data"

export namespace queries {

    export type get_instream_data = pqi.Query<d_stream_get_instream_data.Result, null, d_stream_get_instream_data.Parameters>

}