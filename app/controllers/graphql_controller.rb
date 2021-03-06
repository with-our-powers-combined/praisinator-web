class GraphqlController < ApplicationController

  def query
    puts '-' * 100, GraphQLFormatter.new(params[:query]).to_s, '-' * 100
    result = Schema.execute(params[:query], debug: true, variables: params[:variables])
    render json: result
  end

end
