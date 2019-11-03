package data

import (
	"majlis/app/core"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
)

func TestRepoImp_CreateNewMemberID(t *testing.T) {
	qry := `SELECT member_id FROM "member" ORDER BY "member"."member_id" DESC LIMIT 1`
	tests := []struct {
		name    string
		given   func(sqlmock.Sqlmock)
		want    string
		wantErr bool
	}{
		{
			name: "Normal test case 1",
			given: func(mock sqlmock.Sqlmock) {
				mock.ExpectQuery(core.FixedFullRe(qry)).WillReturnRows(
					sqlmock.NewRows([]string{
						"member_id",
					}).AddRow("EDR00200"),
				)
			},
			want: "EDR00201",
		},
		{
			name: "Normal test case 2 - empty table",
			given: func(mock sqlmock.Sqlmock) {
				mock.ExpectQuery(core.FixedFullRe(qry)).WillReturnRows(
					sqlmock.NewRows([]string{
						"member_id",
					}).AddRow(""),
				)
			},
			want: "EDR00001",
		},
	}
	mock, db := core.NewSQLMock()
	r := &RepoImp{
		db: db,
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			tt.given(mock)
			got, err := r.CreateNewMemberID()
			if (err != nil) != tt.wantErr {
				t.Errorf("RepoImp.CreateNewMemberID() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("RepoImp.CreateNewMemberID() = %v, want %v", got, tt.want)
			}
		})
	}
}
