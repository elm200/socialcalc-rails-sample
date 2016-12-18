class SpreadsheetsController < ApplicationController
  before_action :set_spreadsheet, only: [:show, :edit, :update, :destroy]

  # GET /spreadsheets
  # GET /spreadsheets.json
  def index
    @spreadsheets = Spreadsheet.all
  end

  # GET /spreadsheets/1
  # GET /spreadsheets/1.json
  def show
  end

  # GET /spreadsheets/new
  def new
    @spreadsheet = Spreadsheet.new
  end

  # GET /spreadsheets/1/edit
  def edit
  end

  # POST /spreadsheets
  # POST /spreadsheets.json
  def create
    @spreadsheet = Spreadsheet.new(spreadsheet_params)

    if @spreadsheet.save
      redirect_to @spreadsheet, notice: 'Spreadsheet was successfully created.'
    else
      render :new
    end
  end

  def update
    if @spreadsheet.update(spreadsheet_params)
      redirect_to @spreadsheet, notice: 'Spreadsheet was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @spreadsheet.destroy
    redirect_to spreadsheets_url, notice: 'Spreadsheet was successfully destroyed.'
  end

  private

  def set_spreadsheet
    @spreadsheet = Spreadsheet.find(params[:id])
  end

  def spreadsheet_params
    params.require(:spreadsheet).permit(:title, :content)
  end
end
